module.exports = {
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?(@react-native|react-native)|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|@react-navigation/.*|@sentry|@react-native-community/.*))",
  ],
  setupFilesAfterEnv: ["<rootDir>/setup.tsx"],
  cacheDirectory: ".jest/cache",
  clearMocks: true,
  testPathIgnorePatterns: [
    ".ts-temp",
    "<rootDir>/node_modules/",
    "<rootDir>/e2e/",
    "__fixtures__",
    "\\.{snap, png, svg}$",
  ],
  coveragePathIgnorePatterns: ["node_modules"],
  modulePathIgnorePatterns: [".ts-temp"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // SWC
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        sourceMaps: true,

        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },

          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};
