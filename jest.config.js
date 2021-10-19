module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/polyfills.ts',
    '!<rootDir>/src/app/**/index.ts',
    '!<rootDir>/src/app/**/*.module.ts',
    '!<rootDir>/src/environments/**/*.ts',
  ],
  coverageReporters: ['text', 'html'],
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/test/mocks/index.ts'],
  verbose: true,
};
