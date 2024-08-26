import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from 'vite-plugin-pages'
import { crx } from "@crxjs/vite-plugin";
import { defineViteConfig as define } from './define.config'
import manifest from "./manifest.config";

const viteManifestHackIssue846 = {
  // Workaround from https://github.com/crxjs/chrome-extension-tools/issues/846#issuecomment-1861880919.
  name: 'manifestHackIssue846',
  renderCrxManifest(_manifest, bundle) {
    bundle['manifest.json'] = bundle['.vite/manifest.json']
    bundle['manifest.json'].fileName = 'manifest.json'
    delete bundle['.vite/manifest.json']
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteManifestHackIssue846,
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
        manualChunks(id) { },
      },
    },
    chunkSizeWarningLimit: 5000,
    minify: "terser",
    outDir: 'dist/chrome',
  },
  define,
});
