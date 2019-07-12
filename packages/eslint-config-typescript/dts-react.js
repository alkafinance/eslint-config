/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  ...require('./dts'),
  rules: {
    ...require('./dts').rules,
    // https://github.com/yannickcr/eslint-plugin-react
    'react/prefer-stateless-function': 'off',
  },
};
