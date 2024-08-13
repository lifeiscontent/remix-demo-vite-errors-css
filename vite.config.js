import { defineConfig } from "vite";
import { installGlobals } from "@remix-run/node";
import { vitePlugin as remix } from "@remix-run/dev";

installGlobals();

export default defineConfig({
  server: {
    port: 3081,
  },
  plugins: [
    remix({
      ssr: false,
      ignoredRouteFiles: ["**/*.css"],
    }),
  ],
});
