"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    // enforces closing bracket after props always
    "react/jsx-closing-bracket-location": [
      "error",
      {
        selfClosing: "tag-aligned",
        nonEmpty: "tag-aligned"
      }
    ],

    // enforce shorthand or standard form for React fragments 
    "react/jsx-fragments": ["error", "syntax"],

    // enforce spaces between curly braces
    "react/jsx-curly-spacing": "error",

    // do not enforce consistent props indentation
    "react/jsx-indent-props": ["error", 2],

    // prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": "error",

    // disallow undeclared variables
    "react/jsx-no-undef": "error",

    // prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": "error",

    // prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": "error",

    // prevent missing parentheses around multilines JSX
    "react/jsx-wrap-multilines": "error",

    // warn usage of setState in componentDidMount
    "react/no-did-mount-set-state": "warn",

    // prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": "error",

    // prevent direct mutation of this.state
    "react/no-direct-mutation-state": "error",

    // prevent multiple component definition per file except for stateless components
    "react/no-multi-comp": ["error", { ignoreStateless: true }],

    // warn on usage of unknown DOM property
    "react/no-unknown-property": "warn",

    // prefer stateless function over components
    "react/prefer-stateless-function": "error",

    // prevent missing props validation in a React component definition
    "react/prop-types": ["error", { ignore: ["children"] }],

    // prevent extra closing tags for components without children
    "react/self-closing-comp": "error",

    // enforce component methods order
    "react/sort-comp": "error"
  }
};
