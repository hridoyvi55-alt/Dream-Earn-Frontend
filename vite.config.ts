import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@i18n": path.resolve(__dirname, "./src/i18n"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@error": path.resolve(__dirname, "./src/error"),
    },
  },

  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },

  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,

    sourcemap: false,

    minify: "esbuild",

    cssCodeSplit: true,

    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react")) {
            return "react-vendor";
          }

          if (id.includes("node_modules/firebase")) {
            return "firebase";
          }

          if (id.includes("node_modules/axios")) {
            return "axios";
          }

          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },

  envDir: ".",

  envPrefix: "VITE_",
});
