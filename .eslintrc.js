module.exports = {
  root: true,
  // extends: [
  //   'eslint:recommended',
  //   'plugin:eslint-plugin/recommended',
  //   'plugin:node/recommended',
  //   'prettier',
  // ],
  plugins: ['prettier'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  parser: '@babel/eslint-parser',
  overrides: [
    {
      files: ['*.test.js'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
