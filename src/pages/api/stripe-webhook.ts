import type { APIRoute } from "astro";
import { getStripe, json } from "@/lib/stripe";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !webhookSecret) return json({ error: "Webhook verification is not configured." }, 400);

  try {
    const stripe = getStripe();
    const payload = await request.text();
    const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      // TODO: Persist the purchase entitlement in a database.
      // TODO: Generate a private signed download URL and email it to session.customer_details?.email.
      console.info("Verified resource purchase", session.id, session.metadata?.resourceSlug);
    }

    return json({ received: true });
  } catch (error) {
    console.error("stripe-webhook", error);
    return json({ error: "Invalid webhook signature." }, 400);
  }
};
