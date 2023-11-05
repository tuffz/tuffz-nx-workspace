const nxPreset = require('@nx/jest/preset').default;

const path = require('path');
module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: [path.resolve(__dirname, './setup-testing-library.js')],
};
