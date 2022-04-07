module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-use-before-define": "off", // 視情況打開
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-one-expression-per-line": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "global-require": "off",
    "prettier/prettier": "error"
  }
};
