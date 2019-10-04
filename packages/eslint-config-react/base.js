/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'plugin:react/recommended',
    'prettier/react',
  ],
  plugins: ['react-hooks'],
  settings: {
    'import/extensions': ['.js', 'jsx'],
  },
  rules: {
    // http://eslint.org/docs/rules
    'class-methods-use-this': [
      'warn',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'no-unused-expressions': ['warn', {allowShortCircuit: true}],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
  },
};
