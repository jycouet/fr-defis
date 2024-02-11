import type { KIT_ROUTES } from "$lib/ROUTES";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";

export default defineConfig({
  plugins: [
    kitRoutes<KIT_ROUTES>({
      // Conf
      PAGES: {
        "/003": {
          explicit_search_params: {
            joueur: { type: "string | undefined" },
            r0c0: { type: "string | undefined" },
            r0c1: { type: "string | undefined" },
            r0c2: { type: "string | undefined" },
            r1c0: { type: "string | undefined" },
            r1c1: { type: "string | undefined" },
            r1c2: { type: "string | undefined" },
            r2c0: { type: "string | undefined" },
            r2c1: { type: "string | undefined" },
            r2c2: { type: "string | undefined" },
          },
        },
      },
    }),
    sveltekit(),
  ],
});
