import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@widgets": resolve(__dirname, "src/widgets/index.js"),
      "@hooks": resolve(__dirname, "src/shared/hooks"),
      "@ui": resolve(__dirname, "src/widgets/shared/ui"),
    },
  },
});
