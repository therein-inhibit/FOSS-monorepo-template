import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  root: "./src",
  plugins: [solidPlugin({ hot: true })],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
