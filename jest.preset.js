const nxPreset = require('@nx/jest/preset').default;

const path = require('path');
module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['lcov', 'clover', 'text', 'cobertura'],
  setupFilesAfterEnv: [path.resolve(__dirname, './setup-testing-library.js')],
};
