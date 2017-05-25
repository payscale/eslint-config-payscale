module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "ecmaFeatures": {
        "jsx": true
    },
    "env": {
		"amd": true,
		"browser": true,
		"jquery": true,
		"node": true,
		"es6": true,
		"worker": true
	},
    "plugins": [
        "react"
    ],
    "rules": {
        // require the use of === and !==, except in certain cases
        // where it makes sense to use == and !=
        // http://eslint.org/docs/rules/eqeqeq
        "eqeqeq": ["error", "smart"],

        // 	disallow trailing commas
        "comma-dangle": [2, "never"],

        // enforce consistent indentation of 4 spaces
        "indent": [ "error", 4 ],

        // allow the use of console
        "no-console": 0,

        // disallow the use of debugger
        "no-debugger": 2,

        // 	disallow unnecessary parentheses only around function expressions
        "no-extra-parens": [ 2, "functions" ],

        //  disallow unnecessary semicolons
        "no-extra-semi": 2,

        // allow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": 0,

        // allow the use of undeclared and disallow use of unused variables
        "no-undef": 0,
        "no-unused-vars": [2, { "args": "none", "ignoreRestSiblings": true }],

        // enforce consistent spacing inside braces
        "object-curly-spacing": [2, "always"],

        // require semicolons instead of ASI
        "semi": 2,

        // enforces spacing after semicolons and disallows spacing before semicolons
        "semi-spacing": 2,

        // require single quotes where possible and allow strings to use backtick
        "quotes": [2, "single", { "allowTemplateLiterals": true }],

        // 	enforce valid JSDoc comments
        "valid-jsdoc": [
          2,
          { "requireReturn": false }
        ],

        // React rules

        // enforces closing bracket after props always
        "react/jsx-closing-bracket-location": [
          2,
          {
            "selfClosing": "after-props",
            "nonEmpty": "after-props"
          }
        ],

        // enforce spaces between curly braces
        "react/jsx-curly-spacing": 2,

        // do not enforce consistent props indentation
        "react/jsx-indent-props": 0,

        // do not enforce max props per line
        "react/jsx-max-props-per-line": 0,

        // prevent duplicate props in JSX
        "react/jsx-no-duplicate-props": 2,

        // allow unwrapped literals (e.g. {'test'} vs test)
        "react/jsx-no-literals": 0,

        // disallow undeclared variables
        "react/jsx-no-undef": 2,

        // require prop types to be alpha sorted
        "react/sort-prop-types": 2,

        // do not enforce alpha sorted props passed in
        "react/jsx-sort-props": 0,

        // prevent React to be incorrectly marked as unused
        "react/jsx-uses-react": 2,

        // [revent variables used in JSX to be incorrectly marked as unused
        "react/jsx-uses-vars": 2,

        // prevent missing parentheses around multilines JSX
        "react/jsx-wrap-multilines": 2,

        // allow usage of dangerous JSX properties
        "react/no-danger": 0,

        // prevent usage of setState in componentDidMount
        "react/no-did-mount-set-state": 2,

        // prevent uage of setSate in componentDidUpdate
        "react/no-did-update-set-state": 2,

        // prevent direct mutation of this.state
        "react/no-direct-mutation-state": 2,

        // prevent multiple component definition per file except for stateless components
        "react/no-multi-comp": [
          2,
          { "ignoreStateless": true }
        ],

        // allow usage of setState
        "react/no-set-state": 0,

        // warn on usage of unknown DOM property
        "react/no-unknown-property": 1,

        // prevent missing props validation in a React component definition
        "react/prop-types": [2, { "ignore": ["children"] }],

        // prevent missing React when using JSX
        "react/react-in-jsx-scope": 0,

        // prevent extra closing tags for components without children
        "react/self-closing-comp": 2,

        // enforce component methods order
        "react/sort-comp": 2,
      }
};
