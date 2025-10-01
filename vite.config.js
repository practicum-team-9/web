import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@widgets": resolve(__dirname, "src/widgets/index.js"),
      "@ui": resolve(__dirname, "src/shared/ui"),
    },
  },
});
