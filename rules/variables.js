"use strict";

module.exports = {
  rules: {
    // allow the use of undeclared and disallow use of unused variables
    "no-undef": 0,
    "no-unused-vars": [2, { args: "none", ignoreRestSiblings: true }]
  }
};
