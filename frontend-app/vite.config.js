import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ✅ Explicitly define output folder (Vercel needs this)
  build: {
    outDir: "dist",
  },

  // ✅ Ensure correct path handling for deployment
  base: "./",

  // (Optional) Makes local dev server stable on Vercel preview
  server: {
    port: 5173,
    open: true,
  },
});
