const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "squ_82d0e1c7a51686c5febccb3beb8ba0168d913e53",
    exclusions: "**/*.test.tsx",
    tests: "./src",
    test: {
      inclusions: "**/*.test.tsx,**/*.test.ts",
    },
    typescript: {
      lcov: {
        reportPaths: "coverage/lcov.info",
      },
    },
    testExecutionReportPaths: "test-report.xml",
    options: {
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);
