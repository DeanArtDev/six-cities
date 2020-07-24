module.exports = {
  verbose: true,
  rootDir: ``,
  setupFiles: [`<rootDir>jest.setup.js`],
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  testRegex: `(/tests/.|(\.|/)(test|spec))\.(js?|jsx?|tsx?)$`,
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
  }
};
