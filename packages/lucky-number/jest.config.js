module.exports = {
  transform: {
    '^.+\\.tsx?$': 'C:/Users/maxim/DEV/cantara/node_modules/ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
  "^lucky-number$": "<rootDir>/src"
}
};
