import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Suppresses deprecation warnings from dependencies
        silenceDeprecations: ["import"], // Specifically silence @import deprecation warnings
      },
    },
  },
});
