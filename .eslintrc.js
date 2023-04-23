module.exports = {
  // other configuration options...
  plugins: [
    'vue'
  ],
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  "parser": "vue-eslint-parser",
  rules: {
    'vue/attribute-hyphenation': 'error',
    'vue/html-self-closing': 'off',
    'no-debugger': 'off'
    // more rules...
  },
  // other configuration options...
}