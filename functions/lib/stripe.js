import { json } from "./response.js";

export async function stripeRequest(env, path, options = {}) {
  if (!env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY is not configured.");
  const response = await fetch(`https://api.stripe.com/v1${path}`, {
    method: options.method || "GET",
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      ...(options.body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: options.body,
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error?.message || "Stripe request failed.");
  return payload;
}

export function methodNotAllowed() {
  return json({ error: "Method not allowed." }, 405);
}

export async function hmacHex(secret, payload) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function constantTimeEqual(left, right) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  return mismatch === 0;
}
