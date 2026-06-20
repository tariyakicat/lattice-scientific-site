import { escapeHtml, json } from "../lib/response.js";

const MAX_FILES = 3;
const MAX_FILE_SIZE = 3 * 1024 * 1024;
const MAX_TOTAL_SIZE = 4 * 1024 * 1024;

function value(form, key) {
  return String(form.get(key) || "").trim();
}

function toBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary);
}

export async function onRequestPost({ request, env }) {
  try {
    const form = await request.formData();
    const name = value(form, "name");
    const email = value(form, "email");
    const projectType = value(form, "projectType");
    const target = value(form, "target");
    const message = value(form, "message");

    if (value(form, "website")) return json({ ok: true });
    if (!name || !email || !message) return json({ error: "Name, email and project details are required." }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "Please enter a valid email address." }, 400);
    if (name.length > 120 || email.length > 254 || target.length > 240 || message.length > 8000) return json({ error: "One or more fields are too long." }, 400);

    const files = form.getAll("files").filter((entry) => entry instanceof File && entry.size > 0);
    if (files.length > MAX_FILES) return json({ error: `Please attach no more than ${MAX_FILES} files.` }, 400);
    if (files.some((file) => file.size > MAX_FILE_SIZE)) return json({ error: "Each attachment must be smaller than 3 MB." }, 400);
    if (files.reduce((total, file) => total + file.size, 0) > MAX_TOTAL_SIZE) return json({ error: "Attachments must total less than 4 MB." }, 400);
    if (!env.RESEND_API_KEY) return json({ error: "Email delivery is not configured yet. Please email contact@latticevisual.com directly." }, 503);

    const attachments = await Promise.all(files.map(async (file) => ({
      filename: file.name.replace(/[\r\n]/g, " "),
      content: toBase64(await file.arrayBuffer()),
    })));
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProjectType = escapeHtml(projectType || "Not specified");
    const safeTarget = escapeHtml(target || "Not specified");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL || "Lattice Visual Website <website@send.latticevisual.com>",
        to: [env.CONTACT_TO_EMAIL || "contact@latticevisual.com"],
        reply_to: email,
        subject: `[Lattice Visual] ${projectType || "Scientific illustration enquiry"} — ${name}`,
        text: [`Name: ${name}`, `Email: ${email}`, `Project type: ${projectType || "Not specified"}`, `Target journal / deadline: ${target || "Not specified"}`, "", message].join("\n"),
        html: `<h2>New project enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p><p><strong>Project type:</strong> ${safeProjectType}</p><p><strong>Target journal / deadline:</strong> ${safeTarget}</p><hr /><p>${safeMessage}</p>`,
        attachments,
      }),
    });
    const payload = await response.json();
    if (!response.ok) {
      console.error("Resend contact email failed", payload);
      return json({ error: "We could not send your message. Please email contact@latticevisual.com directly." }, 502);
    }
    return json({ ok: true, id: payload.id });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return json({ error: "We could not send your message. Please try again or email us directly." }, 500);
  }
}
