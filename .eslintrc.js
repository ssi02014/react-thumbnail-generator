module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    // require 쓰는 것을 방지하는 옵션인데 끔
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 함수 반환 타입 지정 끔
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // any 타입사용을 방지하는 옵션 끔
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  },
};
