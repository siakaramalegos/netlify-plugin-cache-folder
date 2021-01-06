// This is the main file for the Netlify Build plugin cache-folder.
// Find more information in the Netlify documentation.

/* eslint-disable no-unused-vars */
module.exports = {
  // Restore file/directory cached in previous builds.
  // Does not do anything if:
  //  - the file/directory already exists locally
  //  - the file/directory has not been cached yet
  async onPreBuild({ utils }) {
    console.log('Restoring /_cache/ folder...');
    await utils.cache.restore('./_cache/');
  },
  // Cache file/directory for future builds.
  // Does not do anything if:
  //  - the file/directory does not exist locally
  async onPostBuild({ utils }) {
    console.log('Caching /_cache/ for future builds...');
    await utils.cache.save('./_cache/');
  }
}
