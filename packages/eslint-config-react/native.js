/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: ['./base.js'],
  plugins: ['react-native'],
  globals: {
    'react-native/react-native': true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
          '.native.js',
          '.native.jsx',
          '.json',
        ],
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
        'ios.js': 'never',
        'ios.jsx': 'never',
        'android.js': 'never',
        'android.jsx': 'never',
        'native.js': 'never',
        'native.jsx': 'never',
      },
    ],
    // https://github.com/Intellicode/eslint-plugin-react-native
    'react-native/no-color-literals': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'off', // buggy (https://github.com/Intellicode/eslint-plugin-react-native/issues/210)
    'react-native/no-unused-styles': 'error',
    'react-native/sort-styles': 'off',
    'react-native/split-platform-components': 'warn',
  },
};
