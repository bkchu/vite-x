module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['kentcdodds', 'prettier'],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'testing-library'],
  rules: {}
};
