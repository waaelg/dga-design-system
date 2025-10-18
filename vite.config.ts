import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js", // Remove hash from JS
        chunkFileNames: "assets/[name].js", // Remove hash from chunks
        assetFileNames: "assets/[name].[ext]", // Remove hash from CSS/assets
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
});
