import { defineManifest } from "@crxjs/vite-plugin"
import packageJson from './package.json' with { type: "json" }

const { version, description } = packageJson
const [major, minor, patch, label = "0"] = version.replace(/[^\d.-]+/g, "").split(/[.-]/)

const isFirefox = process.env.TARGET_BROWSER === 'firefox';

export default defineManifest(async (env) => ({
  name:
    env.mode === "staging"
      ? "[STAGING] HP Extension"
      : "[PROD] HP Extension",
  description: description,
  version: `${major}.${minor}.${patch}.${label}`,
  version_name: version,
  manifest_version: 3,
  action: {
    default_title: "hp_popup",
    default_popup: "src/popup/index.html",
  },
  background: (
    isFirefox
      ? { scripts: ["src/background/index.ts"] }
      : { service_worker: "src/background/index.ts" }
  ),
  content_scripts: [
    {
      all_frames: false,
      js: ["src/content-scripts/index.ts"],
      matches: ['*://*/*'],
      run_at: 'document_end',
    },
    {
      js: ["src/content-scripts/youtube.ts"],
      matches: ["*://www.youtube.com/watch*"],
      run_at: "document_end"
    },
    {
      js: ["src/content-scripts/linkedin.ts"],
      matches: ["*://www.linkedin.com/*"],
      run_at: "document_end"
    },
  ],
  options_ui: {
    page: "src/options/index.html",
    open_in_tab: true,
  },
  options_page: "src/options/index.html",
  devtools_page: "src/devtools/index.html",
  offline_enabled: false,
  host_permissions: [],
  permissions: [
    "activeTab",
    "alarms",
    "background",
    "bookmarks",
    "browsingData",
    "clipboardRead",
    "clipboardWrite",
    "contextMenus",
    "cookies",
    "downloads",
    "geolocation",
    "history",
    "identity",
    "notifications",
    "power",
    "privacy",
    "scripting",
    "storage",
    "tabs",
    "tts",
    "ttsEngine",
    "webNavigation",
  ],
  icons: {
    100: "src/assets/images/png/campaign_100x100.png",
  },
}))
