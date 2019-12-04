/** @type {import('./packages/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: [
    '@alkafinance/eslint-config',
    '@alkafinance/eslint-config/script',
    '@alkafinance/eslint-config-typescript',
    '@alkafinance/eslint-config-typescript/requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
