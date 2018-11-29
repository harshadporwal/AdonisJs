module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'import/no-useless-path-segments': 'off',
    'no-param-reassign': 'off',
    'eslint-disable': 'off',
    'comma-dangle': 'off',
    'indent': 'off',
    'space-in-parens': 'off',
    'spaced-comment': 'off',
    'quotes': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
