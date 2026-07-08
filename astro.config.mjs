import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/consts";

export default defineConfig({
  site: SITE.url,
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
