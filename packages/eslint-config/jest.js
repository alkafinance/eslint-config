/** @type {import('./eslint').ESLintConfig} */
module.exports = {
  extends: 'plugin:jest/recommended',
  rules: {
    // http://eslint.org/docs/rules
    'max-nested-callbacks': 'off',
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': 'off',
    // https://github.com/jest-community/eslint-plugin-jest
    'jest/consistent-test-it': ['warn', {fn: 'test', withinDescribe: 'it'}],
    'jest/lowercase-name': 'off',
    'jest/no-alias-methods': 'warn',
    'jest/no-duplicate-hooks': 'warn',
    'jest/no-expect-resolves': 'off',
    'jest/no-hooks': 'off',
    'jest/no-if': 'warn',
    'jest/no-large-snapshots': 'off',
    'jest/no-test-return-statement': 'warn',
    'jest/no-truthy-falsy': 'warn',
    'jest/prefer-called-with': 'warn',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-hooks-on-top': 'warn',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be-null': 'warn',
    'jest/prefer-to-be-undefined': 'warn',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/prefer-todo': 'warn',
    'jest/require-to-throw-message': 'warn',
    'jest/require-top-level-describe': 'off',
    'jest/valid-title': 'error',
  },
};
