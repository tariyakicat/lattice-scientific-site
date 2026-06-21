import { getPremiumResource, isPaidSessionForResource } from "../lib/resources.js";
import { constantTimeEqual, hmacHex, stripeRequest } from "../lib/stripe.js";

export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const sessionId = url.searchParams.get("session_id") || "";
    const slug = url.searchParams.get("resource") || "";
    const expires = Number(url.searchParams.get("expires"));
    const signature = url.searchParams.get("signature") || "";
    const resource = getPremiumResource(slug);

    if (!sessionId || !resource || !Number.isFinite(expires) || !signature) {
      return new Response("Invalid download link.", { status: 400 });
    }
    if (expires < Math.floor(Date.now() / 1000)) {
      return new Response("This download link has expired.", { status: 410 });
    }
    if (!env.DOWNLOAD_SIGNING_SECRET || (!resource.inlineContent && !env.PREMIUM_FILES)) {
      return new Response("Secure download storage is unavailable.", { status: 503 });
    }

    const expected = await hmacHex(env.DOWNLOAD_SIGNING_SECRET, `${sessionId}:${slug}:${expires}`);
    if (!constantTimeEqual(expected, signature)) {
      return new Response("Invalid download signature.", { status: 403 });
    }

    const session = await stripeRequest(env, `/checkout/sessions/${encodeURIComponent(sessionId)}`);
    if (!isPaidSessionForResource(session, slug, resource)) {
      return new Response("Payment could not be verified.", { status: 403 });
    }

    if (resource.inlineContent) {
      return new Response(resource.inlineContent, {
        headers: {
          "Content-Type": resource.contentType || "application/octet-stream",
          "Content-Disposition": `attachment; filename="${resource.downloadName}"`,
          "Cache-Control": "private, no-store",
        },
      });
    }

    const object = await env.PREMIUM_FILES.get(resource.r2Key || `${slug}.zip`);
    if (!object?.body) return new Response("The purchased file is not available yet.", { status: 404 });

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("Content-Type", object.httpMetadata?.contentType || "application/octet-stream");
    headers.set("Content-Disposition", `attachment; filename="${resource.downloadName || `${slug}.zip`}"`);
    headers.set("Cache-Control", "private, no-store");
    headers.set("ETag", object.httpEtag);
    return new Response(object.body, { headers });
  } catch (error) {
    console.error("Secure resource download failed", error);
    return new Response("Unable to prepare this download.", { status: 500 });
  }
}
