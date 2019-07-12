// Primarily used for config files in the root or in scripts
/** @type {import('./eslint').ESLintConfig} */
module.exports = {
  rules: {
    'global-require': 'off',
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/no-process-exit': 'off',
  },
};
