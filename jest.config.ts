module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/test/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
