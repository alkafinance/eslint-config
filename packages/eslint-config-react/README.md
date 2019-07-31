# @alkafinance/eslint-config-react

[![npm version](https://img.shields.io/npm/v/@alkafinance/eslint-config-react.svg)](http://npm.im/@alkafinance/eslint-config-react)
[![CircleCI Status](https://img.shields.io/circleci/project/github/alkafinance/eslint-config/master.svg)](https://circleci.com/gh/alkafinance/workflows/eslint-config/tree/master)
[![license: MIT](https://img.shields.io/npm/l/@alkafinance/eslint-config-react.svg)](./LICENSE)
[![dependencies Status](https://david-dm.org/alkafinance/eslint-config/status.svg?path=packages/eslint-config-react)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config-react)
[![devDependencies Status](https://david-dm.org/alkafinance/eslint-config/dev-status.svg?path=packages/eslint-config-react)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config-react&type=dev)

Alka ESLint config for our React/React Native apps.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as: 

```bash
$ yarn add eslint prettier @alkafinance/eslint-config @alkafinance/eslint-config-react --dev
# or
$ npm install eslint prettier @alkafinance/eslint-config @alkafinance/eslint-config-react --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@alkafinance/eslint-config', '@alkafinance/eslint-config-react/web' /* or '@alkafinance/eslint-config-react/native' */],
  rules: {
    // your overrides
  },
};
```

## License

[MIT License](../../LICENSE) © Alka, Inc
