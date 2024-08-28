import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages'
import { crx } from "@crxjs/vite-plugin";
import { defineViteConfig as define } from './define.config'
import manifest from "./manifest.config";

const targetBrowser = process.env.TARGET_BROWSER || 'chrome';
const outputDir = `dist/${targetBrowser}`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svelte(),
    react(),
    crx({ manifest }),
    Pages({
      dirs: [
        {
          dir: 'src/popup/',
          baseRoute: 'popup',
        },
        {
          dir: 'src/views/',
          baseRoute: 'views',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      src: fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(_id) { },
      },
    },
    chunkSizeWarningLimit: 5000,
    minify: "terser",
    outDir: outputDir,
  },
  define,
});
