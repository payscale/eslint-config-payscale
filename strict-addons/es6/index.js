/* Rules for ES6 */
module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false
        }
    },
    rules: {
        // enforces no braces where they can be omitted
        // http://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': ['error', 'as-needed', {
            requireReturnForObjectLiteral: true
        }],

        // require parens in arrow function arguments
        // http://eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: true
        }],

        // require space before/after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['error', { before: true, after: true }],

        // verify super() callings in constructors
        'constructor-super': 'error',

        // enforce the spacing around the * in generator functions
        // http://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', { before: false, after: true }],

        // disallow modifying variables of class declarations
        // http://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // disallow arrow functions where they could be confused with comparisons
        // http://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': ['error', {
            allowParens: true
        }],

        // disallow modifying variables that are declared using const
        'no-const-assign': 'error',

        // disallow duplicate class members
        // http://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // disallow symbol constructor
        // http://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'error',

        // disallow to use this/super before super() calling in constructors.
        // http://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // disallow useless computed property keys
        // http://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // disallow unnecessary constructor
        // http://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // disallow renaming import, export, and destructured assignments to the same name
        // http://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        }],

        // require let or const instead of var
        'no-var': 'error'
    }
};
