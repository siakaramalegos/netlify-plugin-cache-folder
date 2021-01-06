# netlify-plugin-cache-folder

![npm](https://img.shields.io/npm/v/netlify-plugin-cache-folder) ![Netlify](https://img.shields.io/netlify/e09bcd9b-e7f2-4e00-98c7-26712ecdc9ef) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/netlify-plugin-cache-folder)

This Netlify build plugin will cache the **/_cache/** folder between builds.

## Package-based Installation

These are the steps to add this plugin to your project. You can read more in the [Netlify docs](https://docs.netlify.com/configure-builds/build-plugins/#file-based-installation).

1. Use npm, yarn, or any other Node.js package manager to add this plugin to the dev dependencies:
  ```bash
  npm install -D netlify-plugin-cache-folder
  ```
  or
  ```bash
  yarn add -D netlify-plugin-cache-folder
  ```

1. Create a **netlify.toml** file in the root of your project. Your file should include the plugins section below:

  ```toml
  [build]
    command   = "npm run build"

  [[plugins]]
    package = "netlify-plugin-cache-folder"
  ```
