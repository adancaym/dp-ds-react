const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "squ_82d0e1c7a51686c5febccb3beb8ba0168d913e53",
    options: {
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);
