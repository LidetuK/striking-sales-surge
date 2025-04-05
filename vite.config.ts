
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  // ✅ Ensure the correct base path for deployment
  base: mode === "development" ? "/" : "/empowerment/self-development-guide/elevate-higher-the-book/",

  build: {
    outDir: "dist",  // Default output directory
    assetsDir: "assets", // Ensures assets load correctly
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
