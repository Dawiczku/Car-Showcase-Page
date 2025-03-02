module.exports = {
  env: { browser: true, es2020: true, node: true },
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["airbnb-base", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
      },
    ],
    quotes: ["error", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".ts"],
      },
    ],
    "react/require-default-props": "off",
    "no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "comma-dangle": [
      "error",
      {
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "object-curly-newline": "off",
    camelcase: [
      "off",
      {
        properties: "never",
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
    "no-undef": "off",
    "no-return-await": "off",
    "no-unused-vars": "off",
    "no-unused-expressions": [
      "error",
      {
        allowTernary: true,
      },
    ],
    "import/no-extraneous-dependencies": "off",
  },
  ignorePatterns: ["src/**/*.test.ts", "src/frontend/generated/*"],
};
