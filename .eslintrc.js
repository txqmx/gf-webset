module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    quotes: [1, 'single'],
    'vue/html-self-closing': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/max-attributes-per-line': ['off', {
      singleline: 10,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  }
}
