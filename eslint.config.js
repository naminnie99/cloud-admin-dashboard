// eslint.config.js

module.exports = [
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  {
    files: ["custom/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs"
    },
    rules: {
      // You can add custom rules here later if needed
    }
  }
];
