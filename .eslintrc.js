module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:prettier/recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    ENV: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // ecmaVersion: 2016,
    // sourceType: 'module'
  },
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    quotes: ['error', 'single'],
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    // 设置 typescript-eslint 规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/camelcase': 0, // 目前埋点有部分字段无法更换
    '@typescript-eslint/no-non-null-assertion': 0, // 允许非空断言运算符
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [0, { args: 'none' }], // TODO 后期逐步替换
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 0, // TODO
  },
}
