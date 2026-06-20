import { getPremiumResource } from "../lib/resources.js";
import { json } from "../lib/response.js";
import { hmacHex, stripeRequest } from "../lib/stripe.js";

export async function onRequestPost({ request, env }) {
  try {
    const { sessionId } = await request.json();
    if (!sessionId) return json({ error: "A Checkout Session ID is required." }, 400);
    const session = await stripeRequest(env, `/checkout/sessions/${encodeURIComponent(sessionId)}`);
    if (session.payment_status !== "paid") return json({ error: "Payment has not been verified." }, 403);
    const slug = session.metadata?.resourceSlug;
    if (!slug || !getPremiumResource(slug)) return json({ error: "Resource entitlement is invalid." }, 403);
    if (!env.PRIVATE_DOWNLOAD_BASE_URL || !env.DOWNLOAD_SIGNING_SECRET) return json({ error: "Payment is verified, but secure download storage is not configured yet." }, 503);

    const expires = Math.floor(Date.now() / 1000) + 15 * 60;
    const signature = await hmacHex(env.DOWNLOAD_SIGNING_SECRET, `${slug}:${expires}`);
    const url = new URL(`${env.PRIVATE_DOWNLOAD_BASE_URL.replace(/\/$/, "")}/${encodeURIComponent(slug)}`);
    url.searchParams.set("expires", String(expires));
    url.searchParams.set("signature", signature);
    return json({ verified: true, downloadUrl: url.href, expires });
  } catch (error) {
    console.error("Verify session failed", error);
    return json({ error: "Unable to verify this payment session." }, 500);
  }
}
