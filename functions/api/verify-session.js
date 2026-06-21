import { getPremiumResource, isPaidSessionForResource } from "../lib/resources.js";
import { json } from "../lib/response.js";
import { hmacHex, stripeRequest } from "../lib/stripe.js";

export async function onRequestPost({ request, env }) {
  try {
    const { sessionId } = await request.json();
    if (!sessionId) return json({ error: "A Checkout Session ID is required." }, 400);
    const session = await stripeRequest(env, `/checkout/sessions/${encodeURIComponent(sessionId)}`);
    const slug = session.metadata?.resourceSlug;
    const resource = slug ? getPremiumResource(slug) : null;
    if (!slug || !resource || !isPaidSessionForResource(session, slug, resource)) {
      return json({ error: "Payment or resource entitlement could not be verified." }, 403);
    }
    if (!env.DOWNLOAD_SIGNING_SECRET || (!resource.inlineContent && !env.PREMIUM_FILES)) {
      return json({ error: "Payment is verified, but secure download storage is not configured yet." }, 503);
    }

    const expires = Math.floor(Date.now() / 1000) + 15 * 60;
    const signature = await hmacHex(env.DOWNLOAD_SIGNING_SECRET, `${sessionId}:${slug}:${expires}`);
    const url = new URL("/api/download", new URL(request.url).origin);
    url.searchParams.set("session_id", sessionId);
    url.searchParams.set("resource", slug);
    url.searchParams.set("expires", String(expires));
    url.searchParams.set("signature", signature);
    return json({ verified: true, downloadUrl: url.href, expires });
  } catch (error) {
    console.error("Verify session failed", error);
    return json({ error: "Unable to verify this payment session." }, 500);
  }
}
