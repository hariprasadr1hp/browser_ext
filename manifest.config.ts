import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from './package.json' with { type: 'json' }

const { version, name, description } = packageJson
const [major, minor, patch, label = '0'] = version.replace(/[^\d.-]+/g, '').split(/[.-]/)

export default defineManifest(async (env) => ({
  name: name,
  description: description,
  version: `${major}.${minor}.${patch}.${label}`,
  version_name: version,
  manifest_version: 3,
  // key: '',
  action: {
    default_title: "my",
    default_popup: 'src/popup/index.html',
  },
  background: {
    service_worker: 'src/background/index.ts',
  },
  content_scripts: [
    {
      // all_frames: false,
      js: ['src/content-scripts/index.ts'],
      matches: ['*://*/*'],
      // run_at: 'document_end',
    },
    {
      js: ['src/content-scripts/youtube.ts'],
      matches: ["*://www.youtube.com/watch*"],
      run_at: "document_end"
    },
  ],
  options_ui: {
    "page": "src/options/index.html",
    "open_in_tab": true
  },
  offline_enabled: false,
  host_permissions: [],
  permissions: [
    'activeTab',
    'background',
    'scripting',
    'storage',
    'tabs',
  ],
  icons: {
    "100": "src/assets/images/png/campaign_100x100.png",
  },
}))
