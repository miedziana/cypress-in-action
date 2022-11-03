import type {Config} from 'jest';

const config: Config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./setup-jest.ts"],
  modulePathIgnorePatterns: ["cypress/e2e"],
  coverageDirectory: "coverage-jest",
  reporters: [
    "default", "summary"
  ]
};

export default config;
