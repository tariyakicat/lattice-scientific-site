import type { APIRoute } from "astro";
import { getResourceBySlug } from "@/lib/resources";
import { getStripe, json } from "@/lib/stripe";

export const prerender = false;

async function signDownload(resourceSlug: string, expires: number) {
  const signingSecret = import.meta.env.DOWNLOAD_SIGNING_SECRET;
  const privateBase = import.meta.env.PRIVATE_DOWNLOAD_BASE_URL;
  if (!signingSecret || !privateBase) return null;
  const payload = `${resourceSlug}:${expires}`;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(signingSecret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signatureBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  const signature = [...new Uint8Array(signatureBuffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  const url = new URL(`${privateBase.replace(/\/$/, "")}/${encodeURIComponent(resourceSlug)}`);
  url.searchParams.set("expires", String(expires));
  url.searchParams.set("signature", signature);
  return url.href;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { sessionId } = await request.json() as { sessionId?: string };
    if (!sessionId) return json({ error: "A Checkout Session ID is required." }, 400);
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return json({ error: "Payment has not been verified." }, 403);

    const slug = session.metadata?.resourceSlug;
    if (!slug) return json({ error: "This purchase has no resource entitlement." }, 400);
    const resource = await getResourceBySlug(slug);
    if (!resource?.data.isPremium) return json({ error: "Resource entitlement is invalid." }, 403);

    const expires = Math.floor(Date.now() / 1000) + 15 * 60;
    const downloadUrl = await signDownload(slug, expires);
    if (!downloadUrl) {
      // TODO: Configure private object storage and a signing secret before accepting live payments.
      return json({ error: "Payment is verified, but secure download storage is not configured yet." }, 503);
    }

    return json({ verified: true, downloadUrl, expires });
  } catch (error) {
    console.error("verify-session", error);
    return json({ error: "Unable to verify this payment session." }, 500);
  }
};
