import type {Config} from 'jest';

const config: Config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./setup-jest.ts"],
  modulePathIgnorePatterns: ["cypress/e2e"],
  coverageDirectory: "coverage-jest",
  reporters: [
    "default", "summary",
    ["jest-junit", {outputDirectory: 'results', outputName: 'test-results.xml'}],
  ]
};

export default config;
