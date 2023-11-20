// @ts-check

const path = require('path');

const OUTPUT_FILE = `${__dirname}/src/index.js`;

const CAPABILITY_MAP = {
  // empty for now
};

const fs = require('fs');
const semver = require('semver');
const { getAllPackageJsonFiles } = require('workspace-tools');
const { name: thisPackageName, devDependencies } = require('./package.json');

/**
 * Returns the contents of the file at specified path.
 * @param {string} path
 * @returns {string}
 */
function readFile(path) {
  return fs.readFileSync(path, { encoding: 'utf-8' });
}

const packages = {};

// Look for react-native capabilities
for (const [name, capability] of Object.entries(CAPABILITY_MAP)) {
  if (name in devDependencies) {
    packages[capability] = { name, version: devDependencies[name] };
  }
}

const workspacePackages = getAllPackageJsonFiles(__dirname);
for (const manifestPath of workspacePackages.sort()) {
  const { name, version, private, devOnly } = JSON.parse(readFile(manifestPath));
  if (private || name === thisPackageName || name === '@fluentui-react-native/codemods') {
    continue;
  }

  if (!name) {
    throw new Error(`${manifestPath} is missing 'name'`);
  }
  if (!version) {
    throw new Error(`${manifestPath} is missing 'version'`);
  }

  packages[name] = { name, version, devOnly };
}

const { major, minor } = semver.coerce(devDependencies['react-native']);

let profiles;

// When updating FURN to a new react-native version, save the profile for
// the current react-native version in index.js to a new file under src named
// "furn-profile-X.Y.js" and add that profile here. For example:
//
profiles = {
  [`${major}.${minor}`]: packages,
  ...require('./src/furn-profile-0.71.js'),
};

const source = [
  `// This file was generated by '${path.basename(__filename)}'`,
  '/* eslint-disable */',
  `module.exports = ${JSON.stringify(profiles, undefined, 2)};`,
  '',
].join('\n');

if (readFile(OUTPUT_FILE) !== source) {
  fs.writeFileSync(OUTPUT_FILE, source);
} else {
  console.log('✨  Already up to date');
}
