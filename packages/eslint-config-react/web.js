/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: [
    './base.js',
    'eslint-config-airbnb/rules/react-a11y',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.web.js', '.web.jsx', '.json'],
      },
    },
  },
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        'web.js': 'never',
        'web.jsx': 'never',
      },
    ],
  },
};
