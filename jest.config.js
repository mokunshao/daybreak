module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/mocks/styleMock.tsx',
    '^.+\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.tsx',
  },
};
