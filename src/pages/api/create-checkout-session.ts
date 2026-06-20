import type { APIRoute } from "astro";
import { getResourceBySlug, resourceSlug } from "@/lib/resources";
import { getStripe, json } from "@/lib/stripe";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { resourceId } = await request.json() as { resourceId?: string };
    if (!resourceId) return json({ error: "A resource ID is required." }, 400);

    const resource = await getResourceBySlug(resourceId);
    if (!resource || !resource.data.isPremium || resource.data.price === null) {
      return json({ error: "Premium resource not found." }, 404);
    }

    const stripe = getStripe();
    const slug = resourceSlug(resource);
    const origin = new URL(request.url).origin;
    const useSavedPrice = resource.data.stripePriceId && !resource.data.stripePriceId.startsWith("price_TODO");
    const lineItem = useSavedPrice
      ? { price: resource.data.stripePriceId as string, quantity: 1 }
      : {
          price_data: {
            currency: resource.data.currency,
            unit_amount: Math.round(resource.data.price * 100),
            product_data: { name: resource.data.title, description: resource.data.summary },
          },
          quantity: 1,
        };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [lineItem],
      success_url: `${origin}/resources/${slug}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/resources/${slug}/`,
      metadata: { resourceSlug: slug },
      customer_creation: "always",
    });

    return json({ url: session.url });
  } catch (error) {
    console.error("create-checkout-session", error);
    return json({ error: "Unable to start checkout." }, 500);
  }
};
