/* Rules for vanilla javascript */
module.exports = {
    rules: {
        // enforces getter/setter pairs in objects
        'accessor-pairs': 'off',

        // enforces return statements in callbacks of array's methods
        // http://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'error',

        // treat var statements as if they were block scoped
        'block-scoped-var': 'error',

        // specify the maximum cyclomatic complexity allowed in a program
        complexity: ['off', 11],

        // enforce that class methods use "this"
        // http://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': ['error', {
            exceptMethods: []
        }],

        // require return statements to either always or never specify values
        'consistent-return': 'error',

        // must use curly braces (no if (foo) bar();)
        curly: ['error', 'all'],

        // require default case in switch statements
        'default-case': ['error', { commentPattern: '^no default$' }],

        // encourages use of dot notation whenever possible
        'dot-notation': ['error', { allowKeywords: true }],

        // enforces consistent newlines before or after dots
        // http://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // make sure for-in loops have an if statement
        // this prevents unexpected behavior resulting from javascript's for-in
        // being different from, say, C#
        'guard-for-in': 'error',

        // disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',

        // Disallow await inside of loops
        // http://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'error',

        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'error',

        // disallow lexical declarations in case/default clauses
        // http://eslint.org/docs/rules/no-case-declarations.html
        'no-case-declarations': 'error',

        // Disallow comparisons to negative zero
        // http://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'off',

        // disallow assignment in conditional expressions
        // this prevents difficult to spot bugs when you think you're doing a comparison,
        // e.g. if (x = 0) { ... }
        'no-cond-assign': ['error', 'always'],

        // disallow use of constant expressions in conditions
        // use of these rarely used characters in a regex is typically a mistake
        // http://eslint.org/docs/rules/no-control-regex
        'no-constant-condition': 'warn',

        // disallow control characters in regular expressions
        'no-control-regex': 'error',

        // disallow division operators explicitly at beginning of regular expression
        // http://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'off',

        // disallow duplicate arguments in functions
        // never a reason to have duplicate args, as only one will pass through
        // probably a typo
        'no-dupe-args': 'error',

        // disallow duplicate keys when creating object literals
        // like dupe args, always a mistake, as only one key is used
        'no-dupe-keys': 'error',

        // disallow a duplicate case in a switch statement
        // another common mistake - only one can be used
        'no-duplicate-case': 'error',

        // disallow else after a return in an if
        'no-else-return': 'error',

        // disallow empty blocks
        // e.g., if (foo) {}
        // You can put a comment in your empty block to prevent the error
        // http://eslint.org/docs/rules/no-empty
        'no-empty': 'error',

        // disallow the use of empty character classes in regular expressions
        // [] in a regex doesn't match anything
        // http://eslint.org/docs/rules/no-empty-character-class
        'no-empty-character-class': 'error',

        // disallow empty functions, except for standalone funcs/arrows
        // http://eslint.org/docs/rules/no-empty-function
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods'
            ]
        }],

        // disallow empty destructuring patterns
        // http://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 'off',

        // disallow use of eval()
        'no-eval': 'error',

        // disallow assigning to the exception in a catch block
        // this loses the information about the exception
        // http://eslint.org/docs/rules/no-ex-assign
        'no-ex-assign': 'error',

        // disallow adding to native types
        'no-extend-native': 'error',

        // disallow unnecessary function binding
        'no-extra-bind': 'error',

        // disallow double-negation boolean casts in a boolean context
        // for example, unnecessary in an if statement's check
        // http://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // disallow Unnecessary Labels
        // http://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'error',

        // disallow fallthrough of case statements
        'no-fallthrough': 'error',

        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',

        // disallow overwriting functions written as function declarations
        'no-func-assign': 'error',

        // disallow reassignments of native objects or read-only globals
        // http://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['error', { exceptions: [] }],

        // disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': ['error', { 'allowConstructorFlags': ['u', 'y'] }],

        // deprecated in favor of no-global-assign
        'no-native-reassign': 'off',

        // disallow implicit type conversions
        // http://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: []
        }],

        // disallow var and named functions in global scope
        // http://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'off',

        // disallow use of eval()-like methods
        'no-implied-eval': 'error',

        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow usage of __iterator__ property
        'no-iterator': 'error',

        // disallow use of labels for anything other then loops and switches
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'error',

        // disallow creation of functions within loops
        'no-loop-func': 'error',

        // disallow use of multiple spaces
        'no-multi-spaces': 'error',

        // disallow use of multiline strings
        'no-multi-str': 'error',

        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 'error',

        // disallow use of new operator for Function object
        'no-new-func': 'error',

        // disallows creating new instances of String, Number, and Boolean
        'no-new-wrappers': 'error',

        // disallow the use of object properties of the global object (Math and JSON) as functions
        'no-obj-calls': 'error',

        // disallow use of (old style) octal literals
        'no-octal': 'error',

        // disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        'no-octal-escape': 'error',

        // disallow reassignment of function parameters
        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': 'error',

        // disallow usage of __proto__ property
        'no-proto': 'error',

        // disallow use of Object.prototypes builtins directly
        // http://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',

        // disallow declaring the same variable more then once
        'no-redeclare': 'error',

        // disallow multiple spaces in a regular expression literal
        'no-regex-spaces': 'error',

        // disallow certain object properties
        // http://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated'
        }, {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.'
        }, {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.'
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.'
        }],

        // disallow use of assignment in return statement
        'no-return-assign': 'error',

        // disallow redundant `return await`
        'no-return-await': 'error',

        // disallow use of `javascript:` urls.
        'no-script-url': 'error',

        // disallow self assignment
        // http://eslint.org/docs/rules/no-self-assign
        'no-self-assign': 'error',

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',

        // disallow use of comma operator
        'no-sequences': 'error',

        // disallow sparse arrays
        // e.g. [,,] - typically caused by accidentally typing extra commas
        'no-sparse-arrays': 'error',

        // Disallow template literal placeholder syntax in regular strings
        // Probably happens when you switch from template to a regular string, but forget
        // to remove the placeholders
        // http://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // restrict what can be thrown as an exception
        'no-throw-literal': 'error',

        // Avoid code that looks like two expressions but is actually one
        // http://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // disallow unmodified conditions of loops
        // http://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'off',

        // disallow unreachable statements after a return, throw, continue, or break statement
        // you may have intended for the code to be reachable, or may have forgotten
        // to delete it
        // http://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'error',

        // disallow return/throw/break/continue inside finally blocks
        // http://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 'error',

        // disallow negating the left operand of relational operators
        // prevents mistakes like !a && b when you mean !(a && b)
        // http://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // disallow usage of expressions in statement position
        'no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false
        }],

        // disallow unused labels
        // http://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 'error',

        // disallow unnecessary .call() and .apply()
        'no-useless-call': 'off',

        // disallow useless string concatenation
        // http://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // disallow unnecessary string escaping
        // http://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // disallow redundant return; keywords
        // http://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // disallow use of void operator
        // http://eslint.org/docs/rules/no-void
        'no-void': 'error',

        // disallow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        // disallow use of the with statement
        'no-with': 'error',

        // require using Error objects as Promise rejection reasons
        // http://eslint.org/docs/rules/prefer-promise-reject-errors
        // TODO: enable, semver-major
        'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],

        // require use of the second argument for parseInt()
        radix: 'error',

        // require `await` in `async function` (note: this is a horrible rule that should never be used)
        // http://eslint.org/docs/rules/require-await
        'require-await': 'off',

        // disallow comparisons with the value NaN
        // NaN behaves unexpectedly, whereas isNaN(foo) does not
        // http://eslint.org/docs/rules/use-isnan
        'use-isnan': 'error',

        // ensure that the results of typeof are compared against a valid string
        // http://eslint.org/docs/rules/valid-typeof
        'valid-typeof': ['error', { requireStringLiterals: true }],

        // requires to declare all vars on top of their containing scope
        'vars-on-top': 'error',

        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife.html
        'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

        // require or disallow Yoda conditions
        yoda: 'error'
    }
};
