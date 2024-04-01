const nxPreset = require('@nx/jest/preset').default;

const path = require('path');
module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['lcov', 'clover', 'text', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  setupFilesAfterEnv: [path.resolve(__dirname, './setup-testing-library.js')],
};
