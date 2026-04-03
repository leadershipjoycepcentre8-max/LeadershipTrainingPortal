import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  base: "/LeadershipTrainingPortal/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});