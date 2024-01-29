module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  // testEnvironmentOptions: {
  //   customExportConditions: [''],
  // },
  setupFilesAfterEnv: ['./src/test/jest.setup.ts'],
  // transform: {
  //   '^.+\\.tsx?$': 'babel-jest',
  // },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
