module.exports = {
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['src/**/*.js'],
  transform: {
    '\\.js?$': 'babel-jest',
  },
};
