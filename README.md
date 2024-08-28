## HP Browser Extension

### Overview

A browser extension to facilitate day-to-day tasks. Works only on chrome for
now, but sooner will be extended to other browsers (_starting with firefox_)

### Usage

```bash
npm install -g pnpm
pnpm install
```

for development,

```bash
pnpm dev
```

To build the extension, run

```bash
pnpm build # to build directory for the set browser `TARGET_BROWSER` (chrome, firefox)
pnpm build:chrome # to build chrome directory (`dist/chrome`)
pnpm build:firefox # to build firefox directory (`dist/firefox`)
pnpm build:all # to build both chrome and firefox
```

Then load extension to the browser(chrome), `chrome://extensions` as an
[unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)
directing to the path `dist/chrome`, generated after `pnpm build:chrome`

Similarly, load the temporary add-on at
[about:debugging](about:debugging#/runtime/this-firefox), directing to the path
`dist/firefox`, generated after `pnpm build:firefox`

### Project Structure

- `src` - main source.
  - `content-script` - scripts and components to be injected as `content_script`
  - `background` - scripts for background
  - `popup` - popup vue application
  - `options`
  - `views` - application pages, common to all views (Help, Authentication
    etc.,)
  - `components`
  - `assets` - assets used in Vue components
- `dist/chrome` - built files

### Usage

check [`USAGE.md`](./USAGE.md) for information on how to use the app

### References

- [Chrome API](https://developer.chrome.com/docs/extensions/reference/api)
- [FireFox](https://addons.mozilla.org/en-US/developers/)
- [Vite](https://vitejs.dev/)
- [Vite Config](https://vitejs.dev/config/)
- [CRXJS Vite Plugin](https://crxjs.dev/vite-plugin)
- [TypeScript](https://www.typescriptlang.org/)
- [nodejs-polars](https://pola-rs.github.io/nodejs-polars/index.html)
- [ag-grid-vue3](https://www.ag-grid.com/vue-data-grid/deep-dive/)
- [Plotly](https://plotly.com/javascript/)
- [lightweight-charts](https://github.com/tradingview/lightweight-charts)
- [Axios](https://axios-http.com/docs/example)
- [webext-bridge](https://github.com/zikaari/webext-bridge)
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- [Tailwind](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://github.com/antfu/vueuse)
- [Marked](https://github.com/markedjs/marked)
- [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [`setup` SFC syntax](https://pinia.vuejs.org/cookbook/composables.html#Setup-Stores)
- [VueChartJS](https://vue-chartjs.org/guide/#introduction)
