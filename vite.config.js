import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixerPlugin from "autoprefixer";
import tailwindPlugin from "tailwindcss";
import tailwindNestingPlugin from "tailwindcss/nesting";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindNestingPlugin, tailwindPlugin, autoprefixerPlugin],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
