import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.norit-sports.no",
  i18n: {
    defaultLocale: "no",
    locales: ["no", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
