module.exports = {
    extends: 'standard-with-typescript',
    parserOptions: {
      project: './tsconfig.json'
    },
    ignorePatterns: ['*/_tests_/'],
    rules: {
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/return-await': 'off',
      'no-async-promise-executor': 'off',
      'no-trailing-spaces': 'off',
      '@typescript-eslint/restrict-plus-operands': 'error',
    }
  }
