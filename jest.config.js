/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
      collectCoverageFrom: [
          'src/**/*.{ts,tsx}',
          '!**/node_modules/**',
          '!**/*.d.ts',
      ],
      coverageReporters: [
        "json",
        "text"
    ],
    testMatch: [
        "**/__tests__/**/*.ts?(x)",
        "**/?(*.)+(spec|test).ts?(x)"
    ],
};