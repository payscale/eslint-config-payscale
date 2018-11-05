"use strict";

module.exports = {
  rules: {
    // enforce consistent indentation of 2 spaces
    // https://eslint.org/docs/rules/indent
    indent: ["error", 2, { "SwitchCase": 1 }],

    // enforce consistent spacing inside braces
    "object-curly-spacing": ["error", "always"],

    // require semicolons instead of ASI
    semi: "error",

    // require single quotes where possible and allow strings to use backtick
    quotes: [2, "single", { allowTemplateLiterals: true, avoidEscape: true }]
  }
};
