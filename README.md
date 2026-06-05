# Lattice Visual Scientific Illustration Site

Next.js website for the Lattice Visual scientific illustration sub-site.

## Local Development

```bash
npm install
npm run dev -- -p 5173
```

Local URL:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

This is a Next.js App Router project. It does **not** build to `dist`.

## Deployment Notes

The previous version of this repository was a Vite/static SPA and used:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```

Those settings are no longer correct.

### Recommended: Vercel

Use Vercel for the current Next.js site:

```text
Framework preset: Next.js
Build command: npm run build
Output directory: leave blank / Vercel default
Production branch: main
```

Then add the custom domain:

```text
sci.latticevisual.com
```

In Cloudflare DNS, point the subdomain to the Vercel target shown in Vercel's domain settings.

### If Staying On Cloudflare

The existing `sci.latticevisual.com` currently resolves through Cloudflare and was serving the old Vite build. To deploy this Next.js version on Cloudflare, do not use the old `dist` output.

Use either:

- Cloudflare's Next.js static export flow only if API routes are removed and the site is fully static.
- Cloudflare Workers/OpenNext for full Next.js behavior.

The current site includes an API route at:

```text
app/api/quote/route.ts
```

So a full Next deployment target such as Vercel, or Cloudflare Workers/OpenNext, is preferred.
