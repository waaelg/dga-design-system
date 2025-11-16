import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      formats: ["es"], // Only ES modules
      fileName: () => "index.js", // Simple filename
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: "style.css", // Simple CSS name
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ["import"],
      },
    },
  },
  server: {
    port: 3005,
  },
});
