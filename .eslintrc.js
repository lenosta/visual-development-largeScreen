// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'spaced-comment': 'off',
    "indent": 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'semi': ['warn', 'never'],
    // 不允许多个空行
    'no-multiple-empty-lines': ["warn", { "max": 2}],
    // 要求或禁止使用拖尾逗号
    "comma-dangle": ["warn", "never"],
    // 禁止出现多个空格
    'no-multi-spaces': "off",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
