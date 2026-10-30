import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Custom domain is primary. GitHub Pages project URL
  // (https://kevincablik.github.io/ckpg-website/) is not used as the public origin.
  // When a custom domain is attached, Pages serves the site at the domain root, so base is "/".
  site: "https://ckpgdevelopment.com",
  base: "/",
  integrations: [sitemap()],
  redirects: {
    "/projects/seventh-and-franklin": "/projects/seventh-franklin",
    "/projects/seventh-and-franklin-phase-2": "/projects/seventh-franklin",
    "/projects/seventh-and-franklin-phase-3": "/projects/seventh-franklin",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
