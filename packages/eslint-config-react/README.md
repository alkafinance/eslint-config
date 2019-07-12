# @alkafinance/eslint-config-react

[![Version](https://img.shields.io/npm/v/@alkafinance/eslint-config-react.svg)](http://npm.im/@alkafinance/eslint-config-react)
[![Dependency Status](https://david-dm.org/alkafinance/eslint-config/status.svg?path=packages/eslint-config-react)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config-react)
[![devDependency Status](https://david-dm.org/alkafinance/eslint-config/dev-status.svg?path=packages/eslint-config-react)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config-react&type=dev)

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
  extends: ['@alkafinance/eslint-config', '@alkafinance/eslint-config-react' /* or '@alkafinance/eslint-config-react/native' */],
  rules: {
    // your overrides
  },
};
```

## License

[MIT License](../../LICENSE) © Alka, Inc
