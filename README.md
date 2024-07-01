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

Then load extension to the browser(chrome), `chrome://extensions`, directing to
the path `dist/chrome`

To build the extension, run

```bash
pnpm build
```

And then pack files under `dist/chrome` or `dist/firefox`, you can upload to
the corresponding extension store

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

- [Chrome](https://developer.chrome.com/docs/extensions/reference/)
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
