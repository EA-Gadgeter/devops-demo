/**
 * @type {import("eslint").Linter.Config}
 */

const config = {
  env: {
    browser: true,
    es2021: true,
    jquery: true
  },
  extends: [ "eslint:recommended", "jquery" ],
  overrides: [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    indent: [
      "error",
      2
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "space-in-parens": "off",
    "comma-dangle": "off",
    "eol-last": "off",
    "no-unused-vars": "warn",
    "no-console": "error",
    "jquery/no-ajax": "error",
    "max-len": "off",
    "space-before-function-paren": "off",
    "computed-property-spacing": "off",
    "curly": "off",
    "linebreak-style": "off",
    "no-var": "error"
  },
  plugins: [
    "jquery"
  ]
};

module.exports = config;
