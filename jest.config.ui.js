// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('./jest.config');

module.exports = {
  ...base,
  testEnvironment: 'jsdom',
  testRegex: '\\.(uispec|spec)\\.ts[x]?$',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
    '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
  },
};
