/** @type {import('@alkafinance/eslint-config/eslint').ESLintConfig} */
module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'plugin:react/recommended',
    'prettier/react',
  ],
  settings: {
    'import/extensions': ['.js', 'jsx'],
  },
  rules: {
    // http://eslint.org/docs/rules
    'class-methods-use-this': [
      'error',
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
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
  },
};
