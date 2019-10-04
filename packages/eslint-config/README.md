# @alkafinance/eslint-config

[![npm version](https://img.shields.io/npm/v/@alkafinance/eslint-config.svg)](http://npm.im/@alkafinance/eslint-config)
[![CircleCI Status](https://img.shields.io/circleci/project/github/alkafinance/eslint-config/master.svg)](https://circleci.com/gh/alkafinance/workflows/eslint-config/tree/master)
[![license: MIT](https://img.shields.io/npm/l/@alkafinance/eslint-config.svg)](./LICENSE)
[![dependencies Status](https://david-dm.org/alkafinance/eslint-config/status.svg?path=packages/eslint-config)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config)
[![devDependencies Status](https://david-dm.org/alkafinance/eslint-config/dev-status.svg?path=packages/eslint-config)](https://david-dm.org/alkafinance/eslint-config?path=packages/eslint-config&type=dev)

Alka base ESLint config. Intended to be used together with [prettier](https://github.com/prettier/prettier).

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as:

```bash
$ yarn add eslint prettier @alkafinance/eslint-config --dev
# or
$ npm install eslint prettier @alkafinance/eslint-config --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@alkafinance/eslint-config',
  rules: {
    // your overrides
  },
};
```

### Other configs

This config also exposes a few other configs that we use often and pull in as needed.

You can use them standalone:

```js
module.exports = {
  extends: '@alkafinance/eslint-config/<config-name>',
};
```

Or in combination with the base config (recommended):

```js
module.exports = {
  extends: [
    '@alkafinance/eslint-config',
    '@alkafinance/eslint-config/<config-name>',
  ],
};
```

You can also use [ESLint@4 overrides](http://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns) to apply a config only to certain files. For example:

```js
module.exports = {
  ...
  overrides: [
    {
      files: ['**/__tests__/*-test.js', '**/__mocks__/*.js'],
      extends: '@alkafinance/eslint-config/jest',
    },
  ],
};
```

Available configs include:

- `'@alkafinance/eslint-config/jest'` for [Jest](https://facebook.github.io/jest/) related rules
- `'@alkafinance/eslint-config/script'` for usage with config files or scripts

## License

[MIT License](../../LICENSE) © Alka, Inc
