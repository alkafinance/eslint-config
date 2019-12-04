# @alkafinance/eslint-config-typescript

[![npm version](https://img.shields.io/npm/v/@alkafinance/eslint-config-typescript.svg)](http://npm.im/@alkafinance/eslint-config-typescript)
[![CircleCI Status](https://img.shields.io/circleci/project/github/alkafinance/eslint-config/master.svg)](https://circleci.com/gh/alkafinance/workflows/eslint-config/tree/master)
[![license: MIT](https://img.shields.io/npm/l/@alkafinance/eslint-config-typescript.svg)](./LICENSE)
[![dependencies Status](https://david-dm.org/alkafinance/eslint-config/status.svg?path=packages/eslint-config-typescript)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config-typescript)
[![devDependencies Status](https://david-dm.org/alkafinance/eslint-config/dev-status.svg?path=packages/eslint-config-typescript)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config-typescript&type=dev)

Alka ESLint config for our Typescript codebases.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as: 

```bash
$ yarn add eslint prettier @alkafinance/eslint-config @alkafinance/eslint-config-typescript --dev
# or
$ npm install eslint prettier @alkafinance/eslint-config @alkafinance/eslint-config-typescript --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@alkafinance/eslint-config', '@alkafinance/eslint-config-typescript' /* and maybe '@alkafinance/eslint-config-typescript/react' or '@alkafinance/eslint-config-typescript/react-native' */],
  rules: {
    // your overrides
  },
};
```

Additional configs include:

- `'@alkafinance/eslint-config-typescript/requiring-type-checking'` for rules that require type information
- `'@alkafinance/eslint-config-typescript/react'` for usage with [React](https://reactjs.org/)
- `'@alkafinance/eslint-config-typescript/react-native'` for usage with [React Native](https://facebook.github.io/react-native/)

## License

[MIT License](../../LICENSE) © Alka, Inc
