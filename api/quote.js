export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const chunks = [];

    for await (const chunk of request) {
      chunks.push(chunk);
    }

    const byteLength = Buffer.concat(chunks).byteLength;

    return response.status(200).json({
      ok: true,
      receivedBytes: byteLength,
      message: "Quote request received. Connect Resend or SendGrid here for production email delivery.",
    });
  } catch {
    return response.status(500).json({ ok: false, error: "Unable to process quote request" });
  }
}
