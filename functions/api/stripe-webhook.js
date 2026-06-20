import { json } from "../lib/response.js";
import { constantTimeEqual, hmacHex } from "../lib/stripe.js";

export async function onRequestPost({ request, env }) {
  if (!env.STRIPE_WEBHOOK_SECRET) return json({ error: "Webhook verification is not configured." }, 503);
  const signatureHeader = request.headers.get("stripe-signature") || "";
  const parts = Object.fromEntries(signatureHeader.split(",").map((part) => part.split("=", 2)));
  if (!parts.t || !parts.v1) return json({ error: "Invalid Stripe signature." }, 400);

  const timestamp = Number(parts.t);
  if (!Number.isFinite(timestamp) || Math.abs(Date.now() / 1000 - timestamp) > 300) return json({ error: "Expired Stripe signature." }, 400);
  const payload = await request.text();
  const expected = await hmacHex(env.STRIPE_WEBHOOK_SECRET, `${parts.t}.${payload}`);
  if (!constantTimeEqual(expected, parts.v1)) return json({ error: "Invalid Stripe signature." }, 400);

  const event = JSON.parse(payload);
  if (event.type === "checkout.session.completed") {
    // TODO: Persist the entitlement and email the signed download link.
    console.info("Verified resource purchase", event.data?.object?.id, event.data?.object?.metadata?.resourceSlug);
  }
  return json({ received: true });
}
