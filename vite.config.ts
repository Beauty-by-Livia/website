import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  publicDir: "public",
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
