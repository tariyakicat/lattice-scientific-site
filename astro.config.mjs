import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sci.latticevisual.com",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/success/"),
    }),
  ],
  vite: {
    css: {
      postcss: "./postcss.config.js",
    },
  },
});
