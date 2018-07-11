"use strict";

module.exports = {
  rules: {
    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    "array-callback-return": "error",

    // error when variables used outside defined scope
    // https://eslint.org/docs/rules/block-scoped-var#rule-details
    "block-scope-var": "error",

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: []
      }
    ],

    // require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": "error",

    // must use curly braces (no if (foo) bar();)
    // https://eslint.org/docs/rules/curly
    curly: ["error", "all"],

    // require default case in switch statements
    "default-case": ["error", { commentPattern: "^no default$" }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    "dot-location": ["error", "property"],

    // encourages use of dot notation whenever possible
    "dot-notation": ["error", { allowKeywords: true }],

    // require the use of === and !==, except in certain cases
    // where it makes sense to use == and !=
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["error", "smart"],

    // make sure for-in loops have an if statement
    // this prevents unexpected behavior resulting from javascript's for-in
    // being different from, say, C#
    "guard-for-in": "error",

    // disallow the use of alert, confirm, and prompt
    "no-alert": "warn",

    // Disallow await inside of loops
    // http://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": "error",

    // disallow use of arguments.caller or arguments.callee
    "no-caller": "error",

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    "no-case-declarations": "error",

    // disallow else after a return in an if
    "no-else-return": "error",

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"]
      }
    ],

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "error",

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "error",

    // disallow use of eval()
    "no-eval": "error",

    // disallow adding to native types
    "no-extend-native": "error",

    // disallow unnecessary function binding
    "no-extra-bind": "error",

    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": "error",

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    "no-global-assign": ["error", { exceptions: [] }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": "off",

    // disallow use of eval()-like methods
    "no-implied-eval": "error",

    // disallow usage of __iterator__ property
    "no-iterator": "error",

    // disallow use of labels for anything other then loops and switches
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",

    // disallow creation of functions within loops
    "no-loop-func": "error",

    // disallow use of multiple spaces
    "no-multi-spaces": "error",

    // disallow use of multiline strings
    "no-multi-str": "error",

    // disallow use of new operator for Function object
    "no-new-func": "error",

    // disallows creating new instances of String, Number, and Boolean
    "no-new-wrappers": "error",

    // disallow use of new operator when not part of the assignment or comparison
    "no-new": "error",

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    "no-octal-escape": "error",

    // disallow reassignment of function parameters
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": "error",

    // disallow usage of __proto__ property
    "no-proto": "error",

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated"
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead."
      }
    ],

    // disallow use of assignment in return statement
    "no-return-assign": "error",

    // disallow redundant `return await`
    "no-return-await": "error",

    // disallow use of `javascript:` urls.
    "no-script-url": "error",

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    "no-self-assign": "error",

    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",

    // disallow use of comma operator
    "no-sequences": "error",

    // Disallow template literal placeholder syntax in regular strings
    // Probably happens when you switch from template to a regular string, but forget
    // to remove the placeholders
    // http://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "error",

    // restrict what can be thrown as an exception
    "no-throw-literal": "error",

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": "error",

    // disallow negating the left operand of relational operators
    // prevents mistakes like !a && b when you mean !(a && b)
    // http://eslint.org/docs/rules/no-unsafe-negation
    "no-unsafe-negation": "error",

    // disallow usage of expressions in statement position
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    "no-unused-labels": "error",

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "error",

    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": "error",

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": "error",

    // disallow redundant return; keywords
    // http://eslint.org/docs/rules/no-useless-return
    "no-useless-return": "error",

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    "no-void": "error",

    // disallow use of the with statement
    "no-with": "error",

    // require use of the second argument for parseInt()
    radix: "error",

    // requires to declare all vars on top of their containing scope
    "vars-on-top": "error",

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],

    // require or disallow Yoda conditions
    yoda: "error"
  }
};
