/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: './dts.js',
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react
    'react/prefer-stateless-function': 'off',
  },
};
