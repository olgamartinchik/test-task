import 'whatwg-fetch';
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  // testEnvironment: 'jsdom',

  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },

  setupFilesAfterEnv: ['@testing-library/jest-dom', './src/test/jest.setup.ts'],
  // transform: {
  //   '^.+\\.tsx?$': 'babel-jest',
  // },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
