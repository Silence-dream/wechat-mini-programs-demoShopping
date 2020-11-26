module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error"],
    "@typescript-eslint/no-explicit-any": ["off"], // 允许ts的any类型
    "@typescript-eslint/explicit-module-boundary-types": ["off"], // 允许ts的any类型
    eqeqeq:["error","always"] // 强制使用===等于
  },
};
