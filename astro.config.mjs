import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.latticevisual.com",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  adapter: vercel(),
  vite: {
    css: {
      postcss: "./postcss.config.js",
    },
  },
});
