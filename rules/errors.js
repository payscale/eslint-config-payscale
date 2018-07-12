"use strict";

module.exports = {
  rules: {
    // allow the use of console
    "no-console": "off",
    // disallow use of constant expressions in conditions
    // use of these rarely used characters in a regex is typically a mistake
    // http://eslint.org/docs/rules/no-control-regex
    "no-constant-condition": "warn",

    // 	disallow unnecessary parentheses only around function expressions
    "no-extra-parens": ["error", "functions"],

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    "no-unexpected-multiline": "error"
  }
};
