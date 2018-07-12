"use strict";

module.exports = {
  rules: {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: true
      }
    ],

    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    "arrow-parens": [
      "error",
      "as-needed",
      {
        requireForBlockBody: true
      }
    ],

    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": ["error", { before: true, after: true }],

    // verify super() callings in constructors
    "constructor-super": "error",

    // enforce the spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": ["error", { before: false, after: true }],

    // disallow modifying variables of class declarations
    // http://eslint.org/docs/rules/no-class-assign
    "no-class-assign": "error",

    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true
      }
    ],

    // disallow modifying variables that are declared using const
    "no-const-assign": "error",

    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": "error",

    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": "error",

    // disallow to use this/super before super() calling in constructors.
    // http://eslint.org/docs/rules/no-this-before-super
    "no-this-before-super": "error",

    // require let or const instead of var
    "no-var": "error",

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ],

    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "error",

    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    "prefer-template": "error",

    // enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": ["error", "never"],

    // disallow generator functions that do not have yield
    // http://eslint.org/docs/rules/require-yield
    "require-yield": "error",

    // require a Symbol description
    // http://eslint.org/docs/rules/symbol-description
    "symbol-description": "error"
  }
};
