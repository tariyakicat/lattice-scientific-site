import { getPremiumResource } from "../lib/resources.js";
import { json } from "../lib/response.js";
import { stripeRequest } from "../lib/stripe.js";

export async function onRequestPost({ request, env }) {
  try {
    const { resourceId } = await request.json();
    const resource = getPremiumResource(resourceId);
    if (!resource) return json({ error: "Premium resource not found." }, 404);
    const origin = new URL(request.url).origin;
    const body = new URLSearchParams({
      mode: "payment",
      customer_creation: "always",
      success_url: `${origin}/resources/${resourceId}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/resources/${resourceId}/`,
      "metadata[resourceSlug]": resourceId,
      "line_items[0][quantity]": "1",
    });
    if (resource.stripePriceId && !resource.stripePriceId.startsWith("price_TODO")) {
      body.set("line_items[0][price]", resource.stripePriceId);
    } else {
      body.set("line_items[0][price_data][currency]", resource.currency);
      body.set("line_items[0][price_data][unit_amount]", String(resource.price));
      body.set("line_items[0][price_data][product_data][name]", resource.title);
    }
    const session = await stripeRequest(env, "/checkout/sessions", { method: "POST", body });
    return json({ url: session.url });
  } catch (error) {
    console.error("Create checkout session failed", error);
    return json({ error: "Unable to start checkout." }, 500);
  }
}
