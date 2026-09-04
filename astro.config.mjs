import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { includeInSitemap } from "./src/lib/resource-visibility.mjs";

export default defineConfig({
  site: "https://sci.latticevisual.com",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: includeInSitemap,
    }),
  ],
  vite: {
    css: {
      postcss: "./postcss.config.js",
    },
  },
});
