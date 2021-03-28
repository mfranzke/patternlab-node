module.exports = {
  root: true,
  env: {
    node: true,
    builtin: true,
    es6: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      experimentalDecorators: true,
    },
  },
  globals: {},
  plugins: ['prettier'],
  extends: ['eslint-config-prettier'].map(require.resolve),
  rules: {
    'prettier/prettier': 'error',
    'block-scoped-var': 0,
    camelcase: 0,
    'consistent-return': 2,
    curly: [2, 'all'],
    'dot-notation': [1, { allowKeywords: true }],
    eqeqeq: [2, 'allow-null'],
    'global-strict': [0, 'never'],
    'guard-for-in': 2,
    'key-spacing': 0,
    'new-cap': 0,
    'no-alert': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-empty': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': 0,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 1,
    'no-iterator': 2,
    'no-loop-func': 2,
    'node/no-mixed-requires': 0,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-param-reassign': 1,
    'no-proto': 2,
    'no-redeclare': 0,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 1,
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-var': 2,
    'no-with': 2,
    quotes: [0, 'single'],
    radix: 2,
    strict: 0,
    'valid-typeof': 2,
    'vars-on-top': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
