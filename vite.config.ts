import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: "./tsconfig.json"
    }),
    viteStaticCopy({
      targets: [
        { src: "src/assets/share-button-links-react.scss", dest: "" },
        { src: "src/assets/scss", dest: "" }
      ]
    })
  ],
  server: {
    open: true
  },
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/index.ts",
      name: "share-button-links-react",
      formats: ["es", "umd"],
      fileName: (format) => `share-button-links-react.${format}.js`
    },
    cssMinify: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
      output: {
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "share-button-links-react.css";
          }
          return assetInfo.name || "asset.[ext]";
        },
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "react/jsx-dev-runtime": "jsxDevRuntime"
        }
      }
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".jsx", ".tsx"], // .map((ext) => `.${ext}`).filter((ext) => ext !== ".jsx"),
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/assets": path.resolve(__dirname, "src/assets")
    }
  }
});
