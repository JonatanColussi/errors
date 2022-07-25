module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*', '!src/**/types.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  testRegex: 'test/.*?\\.(test|spec)\\.tsx?$',
  verbose: false,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
