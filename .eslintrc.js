module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
}
