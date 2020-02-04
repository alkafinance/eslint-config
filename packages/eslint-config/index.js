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
    'arrow-body-style': ['warn', 'as-needed'],
    'capitalized-comments': 'warn',
    'class-methods-use-this': 'off',
    curly: ['warn', 'all'],
    'default-param-last': 'warn',
    'global-require': 'off',
    'grouped-accessor-pairs': 'warn',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['warn', {max: 4}],
    'max-nested-callbacks': ['warn', {max: 4}],
    'max-statements-per-line': ['warn', {max: 1}],
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-dupe-else-if': 'error',
    'no-empty-function': 'off',
    'no-import-assign': 'off',
    'no-lonely-if': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-nested-ternary': 'off',
    'no-param-reassign': ['warn', {props: false}],
    'no-plusplus': 'off',
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
    'no-setter-return': 'error',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-implicit-coercion': [
      'warn',
      {boolean: true, number: true, string: true},
    ],
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'warn',
    'prefer-regex-literals': 'warn',
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
    'import/named': 'off', // https://github.com/benmosher/eslint-plugin-import/issues/1282
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/always-return': 'off',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/prefer-exponentiation-operator': 'warn',
    'unicorn/prevent-abbreviations': 'off',
  },
};
