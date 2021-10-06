module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['text', 'html'],
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  verbose: true,
};
