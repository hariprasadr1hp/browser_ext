import fs from 'node:fs'
import { spawnSync } from 'node:child_process'
import packageJson from './package.json'

const changelogString = fs.readFileSync('./CHANGELOG.md', 'utf-8')
const readmeString = fs.readFileSync('./README.md', 'utf-8')
const usageString = fs.readFileSync('./USAGE.md', 'utf-8')

const gitCurrentCommit = spawnSync('git', ['rev-parse', '--short', 'HEAD'])
  .stdout.toString()
  .trim()

const jsn = (value: string): string => JSON.stringify(value)

export const defineViteConfig = {
  __VERSION__: jsn(packageJson.version),
  __NAME__: jsn(packageJson.name),
  __DISPLAY_NAME__: jsn(packageJson.displayName),
  __CHANGELOG_STRING__: jsn(changelogString),
  __README_STRING__: jsn(readmeString),
  __USAGE_STRING__: jsn(usageString),
  __GIT_COMMIT__: jsn(gitCurrentCommit),
  __GITHUB_URL__: jsn(packageJson.repository.url),
}
