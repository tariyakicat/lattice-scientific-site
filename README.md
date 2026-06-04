# Lattice Visual Scientific Site

React + Vite website for Lattice Visual's scientific illustration sub-brand.

Suggested deployment target:

```text
science.latticevisual.com
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Build output:

```text
dist
```

## Cloudflare Pages

Use these settings when connecting the GitHub repository to Cloudflare Pages:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node version: pinned by `.node-version`

The `public/_redirects` file is included so SPA routes such as `/work` and `/services` work after deployment.
