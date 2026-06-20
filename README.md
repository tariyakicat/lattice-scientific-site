# Lattice Visual Scientific Illustration Site

Astro + TypeScript website for Lattice Visual scientific illustration and its growing resource library.

## Local Development

```bash
npm install
npm run dev -- --port 5173
```

Local URL:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

Astro prerenders the homepage, resource hub, and every resource detail page. Stripe API routes opt out of prerendering and run through the configured server adapter.

## Add A Resource

Create one MDX file in `src/content/resources/` using an existing entry as a template. The content schema lives in `src/content.config.ts`. On the next build, the resource is added to the hub, receives its own static detail page, and is included in the sitemap.

Images referenced by MDX entries live in `src/assets/resources/`. Free public files live in `public/downloads/`; premium files must remain in private object storage.

## Deployment Notes

The production configuration in this repository uses `@astrojs/vercel` because the Stripe routes need on-demand server execution:

```text
Framework preset: Astro
Build command: npm run build
Output directory: framework default
```

Set `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `PRIVATE_DOWNLOAD_BASE_URL`, and `DOWNLOAD_SIGNING_SECRET` in the deployment environment. Replace every `price_TODO_*` value in resource frontmatter with a real Stripe Price ID before accepting live payments.

If the final runtime remains Cloudflare Workers/Pages, replace the Vercel adapter with `@astrojs/cloudflare` before deployment. Static pages stay unchanged; only the API runtime adapter changes.
