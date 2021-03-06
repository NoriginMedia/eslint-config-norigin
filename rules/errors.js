//
// Possible Errors
//
// The following rules point out areas where you might have made mistakes.
//

module.exports = {
	rules: {
		// enforce “for” loop update clause moving the counter in the right direction.
		"for-direction": "error",

		// enforce return statements in getters
		"getter-return": "error",

		// Disallow await inside of loops
		// http://eslint.org/docs/rules/no-await-in-loop
		"no-await-in-loop": "error",

		// disallow comparing against -0
		"no-compare-neg-zero": "error",

		// require trailing commas in multiline object literals
		"comma-dangle": "error",

		// disallow assignment in conditional expressions
		"no-cond-assign": ["error", "except-parens"],

		// disallow use of console
		"no-console": ["error", {"allow": ["warn", "error", "log"]}],

		// disallow use of constant expressions in conditions
		"no-constant-condition": "error",

		// disallow control characters in regular expressions
		"no-control-regex": "error",

		// disallow use of debugger
		"no-debugger": "error",

		// disallow duplicate arguments in functions
		"no-dupe-args": "error",

		// disallow duplicate keys when creating object literals
		"no-dupe-keys": "error",

		// disallow a duplicate case label.
		"no-duplicate-case": "error",

		// disallow empty statements
		"no-empty": "error",

		// disallow the use of empty character classes in regular expressions
		"no-empty-character-class": "error",

		// disallow assigning to the exception in a catch block
		"no-ex-assign": "error",

		// disallow double-negation boolean casts in a boolean context
		"no-extra-boolean-cast": "error",

		// disallow unnecessary parentheses
		// http://eslint.org/docs/rules/no-extra-parens
		"no-extra-parens": ["error", "functions"],

		// disallow unnecessary semicolons
		"no-extra-semi": "error",

		// disallow overwriting functions written as function declarations
		"no-func-assign": "error",

		// disallow function or variable declarations in nested blocks
		// TODO fix var in nested blocks someday ["error", "both"]
		"no-inner-declarations": "error",

		// disallow invalid regular expression strings in the RegExp constructor
		"no-invalid-regexp": "error",

		// disallow irregular whitespace outside of strings and comments
		"no-irregular-whitespace": "error",

		// disallow the use of object properties of the global object (Math and JSON) as functions
		"no-obj-calls": "error",

		// disallow use of Object.prototypes builtins directly
		// http://eslint.org/docs/rules/no-prototype-builtins
		"no-prototype-builtins": "warn",

		// disallow multiple spaces in a regular expression literal
		"no-regex-spaces": "error",

		// disallow sparse arrays
		"no-sparse-arrays": "error",

		// disallow template literal placeholder syntax in regular strings
		"no-template-curly-in-string": "error",

		// Avoid code that looks like two expressions but is actually one
		"no-unexpected-multiline": "error",

		// disallow unreachable statements after a return, throw, continue, or break statement
		"no-unreachable": "error",

		// disallow negation of the left operand of an in expression
		"no-unsafe-negation": "error",

		// disallow return/throw/break/continue inside finally blocks
		// http://eslint.org/docs/rules/no-unsafe-finally
		"no-unsafe-finally": "error",

		// disallow comparisons with the value NaN
		"use-isnan": "error",

		// ensure JSDoc comments are valid
		// http://eslint.org/docs/rules/valid-jsdoc
		"valid-jsdoc": "off",

		// ensure that the results of typeof are compared against a valid string
		"valid-typeof": "error"
	}
};
