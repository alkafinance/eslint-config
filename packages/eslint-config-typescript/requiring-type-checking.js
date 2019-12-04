/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      {
        allowNullable: true,
        ignoreRhs: true,
      },
    ],
  },
};
