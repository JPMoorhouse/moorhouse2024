import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import netlify from "@astrojs/netlify";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://moorhousecoating.com",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== "https://moorhousecoating.com/keystatic/",
    }),
    tailwind(),
    react(),
    markdoc(),
    keystatic(),
    robotsTxt(),
    partytown(),
  ],
  output: "hybrid",
  adapter: netlify(),
});
