module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  transformIgnorePatterns: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/.docz/'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/mocks/styleMock.tsx',
    '^.+\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.tsx',
  },
  collectCoverage: true,
  reporters: ['default'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
