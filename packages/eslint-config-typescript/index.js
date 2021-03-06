/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        directory: process.cwd(),
        extensions: ['.js', '.ts', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts'],
  },
  rules: {
    // http://eslint.org/docs/rules
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'no-undef': 'off',
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
          balanced: true,
        },
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/array-type': [
      'warn',
      {default: 'array-simple', readonly: 'array-simple'},
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        detectObjects: false,
        enforceConst: true,
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
