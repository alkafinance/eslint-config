/** @type {import('./eslint').ESLintConfig} */
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/unicorn',
  ],
  rules: {
    // http://eslint.org/docs/rules
    'capitalized-comments': 'warn',
    'default-param-last': 'warn',
    'lines-between-class-members': 'off',
    'max-depth': ['warn', {max: 4}],
    'max-nested-callbacks': ['warn', {max: 4}],
    'max-params': ['warn', {max: 4}],
    'max-statements-per-line': ['warn', {max: 1}],
    'no-console': 'off',
    'no-empty-function': 'off',
    'no-import-assign': 'off',
    'no-lonely-if': 'off',
    'no-nested-ternary': 'off',
    'prefer-regex-literals': 'warn',
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-implicit-coercion': [
      'warn',
      {boolean: true, number: true, string: true},
    ],
    'no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      {blankLine: 'always', prev: '*', next: 'return'},
    ],
    'prefer-destructuring': 'off',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/no-unused-enable': 'warn',
    'eslint-comments/no-use': [
      'warn',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
        ],
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import
    'import/prefer-default-export': 'off',
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/always-return': 'off',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/catch-error-name': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
