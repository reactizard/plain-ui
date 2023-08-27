module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/*/*.stories.{ts,tsx}",
    "!<rootDir>/src/**/*/{styles,types,index}.{ts,tsx}"
  ]
}
