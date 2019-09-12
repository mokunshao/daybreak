module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/mocks/styleMock.tsx',
    '^.+\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>setupTests.tsx'],
  collectCoverage: true,
  reporters: ['default'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'lib/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
