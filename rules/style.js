//
//Stylistic Issues
//
// These rules are purely matters of style and are quite subjective.
//

module.exports = {
	rules: {
		// enforce spacing inside array brackets
		"array-bracket-spacing": [2, "never"],

		// enforce spacing inside single-line blocks
		// http://eslint.org/docs/rules/block-spacing
		"block-spacing": [0, "never"],

		// enforce one true brace style
		"brace-style": 2,

		// require camel case names
		"camelcase": [2, {properties: "never"}],

		// enforce spacing before and after comma
		"comma-spacing": [2, {
			before: false,
			after: true
		}],

		// enforce one true comma style
		"comma-style": [2, "last"],

		// disallow padding inside computed properties
		"computed-property-spacing": [2, "never"],

		// enforces consistent naming when capturing the current execution context
		"consistent-this": [2, "that", "service"],

		// enforce newline at the end of file, with no multiple empty lines
		"eol-last": 2,

		// disallow space between function identifier and application
		"func-call-spacing": [2, "never"],

		// require function expressions to have a name
		// TODO should all our function expressions have names
		"func-names": 0,

		// enforces use of function declarations or expressions
		"func-style": 0,

		// Blacklist certain identifiers to prevent them being used
		// http://eslint.org/docs/rules/id-blacklist
		"id-blacklist": [0, "data", "err", "e", "cb", "callback"],

		// this option enforces minimum and maximum identifier lengths
		// (variable names, property names etc.)
		"id-length": [1, {
			"min": 1,
			"max": 25,
			"properties": "never",
			"exceptions": []
		}],

		// require identifiers to match the provided regular expression
		"id-match": 0,

		// this option sets a specific tab width for your code
		// http://eslint.org/docs/rules/indent
		"indent": [2, "tab", { "SwitchCase": 1 }],

		// specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		"jsx-quotes": [2, "prefer-double"],

		// enforces spacing between keys and values in object literal properties
		"key-spacing": [1, {
			"beforeColon": false,
			"afterColon": true
		}],

		// require a space before & after certain keywords
		"keyword-spacing": 2,

		// enforce position of line comments
		"line-comment-position": [2, { "position": "above" }],

		// disallow mixed "LF" and "CRLF" as linebreaks
		"linebreak-style": [2, "unix"],

		// enforces empty lines around comments
		"lines-around-comment": [1, {
			"beforeBlockComment": true,
			"afterBlockComment": false,
			"beforeLineComment": true,
			"afterLineComment": false,
			"allowBlockStart": true,
			"allowObjectStart": true,
			"allowArrayStart": true
		}],

		// require or disallow newlines around directives
		"lines-around-directive": [2, { "before": "never", "after": "always" }],

		// specify the maximum depth that blocks can be nested
		"max-depth": [2, {"maximum": 5}],

		// specify the maximum length of a line in your program
		// http://eslint.org/docs/rules/max-len
		"max-len": [1, {
			"code": 120,
			"tabWidth": 4,
			"ignoreUrls": true
		}],

		// specify the max number of lines in a file
		// http://eslint.org/docs/rules/max-lines
		// TODO should we keep files small
		"max-lines": [0, {
			max: 500,
			skipBlankLines: true,
			skipComments: true
		}],

		// specify the maximum depth callbacks can be nested
		"max-nested-callbacks": [2, {"maximum": 3}],

		// limits the number of parameters that can be used in the function declaration.
		// TODO deal with funtions with big number of params someday
		"max-params": [0, {"maximum": 5}],

		// specify the maximum number of statement allowed in a function
		// TODO deal with max statements someday
		"max-statements": 0,

		// restrict the number of statements per line
		// http://eslint.org/docs/rules/max-statements-per-line
		"max-statements-per-line": [2, { "max": 3 }],

		//	enforce newlines between operands of ternary expressions
		"multiline-ternary": 0,

		// require a capital letter for constructors
		"new-cap": 2,

		// disallow the omission of parentheses when invoking a constructor with no arguments
		"new-parens": 2,

		// allow/disallow an empty newline after var statement
		"newline-after-var": 1,

		// http://eslint.org/docs/rules/newline-before-return
		"newline-before-return": 1,

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// http://eslint.org/docs/rules/newline-per-chained-call
		"newline-per-chained-call": [2, {"ignoreChainWithDepth": 4}],

		// disallow use of the Array constructor
		"no-array-constructor": 2,

		// disallow use of bitwise operators
		"no-bitwise": 2,

		// disallow use of the continue statement
		"no-continue": 2,

		// disallow comments inline after code
		"no-inline-comments": 1,

		// disallow if as the only statement in an else block
		"no-lonely-if": 2,

		// disallow un-paren"d mixes of different operators
		// http://eslint.org/docs/rules/no-mixed-operators
		"no-mixed-operators": [2, {
			groups: [
				["+", "-", "*", "/", "%", "**"],
				["&", "|", "^", "~", "<<", ">>", ">>>"],
				["==", "!=", "===", "!==", ">", ">=", "<", "<="],
				["&&", "||"],
				["in", "instanceof"]
			],
			allowSamePrecedence: false
		}],

		// disallow mixed spaces and tabs for indentation
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],

		// disallow multiple empty lines and only one newline at the end
		"no-multiple-empty-lines": [1, {
			"max": 1,
			"maxEOF": 0
		}],

		// disallow negated conditions
		// http://eslint.org/docs/rules/no-negated-condition
		// TODO decide if we need to remove negated conditions
		"no-negated-condition": 0,

		// disallow nested ternary expressions
		"no-nested-ternary": 2,

		// disallow use of the Object constructor
		"no-new-object": 2,

		// disallow use of unary operators, ++ and --
		"no-plusplus": 0,

		// disallow certain syntax forms
		// http://eslint.org/docs/rules/no-restricted-syntax
		// TODO require fine tune http://eslint.org/docs/rules/no-restricted-syntax
		"no-restricted-syntax": [
			0,
			"DebuggerStatement",
			"ForInStatement",
			"LabeledStatement",
			"WithStatement"
		],

		// disallow tabs in file
		"no-tabs": 0,

		// disallow the use of ternary operators
		"no-ternary": 0,

		// disallow trailing whitespace at the end of lines
		"no-trailing-spaces": 2,

		// disallow dangling underscores in identifiers
		"no-underscore-dangle": [2, { "allow": ["_super", "__useDefault"] }],

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// http://eslint.org/docs/rules/no-unneeded-ternary
		"no-unneeded-ternary": [2, {"defaultAssignment": true }],

		// disallow whitespace before properties
		// http://eslint.org/docs/rules/no-whitespace-before-property
		"no-whitespace-before-property": 2,

		// require padding inside curly braces
		"object-curly-spacing": [2, "never"],

		// enforce line breaks between braces
		// http://eslint.org/docs/rules/object-curly-newline
		// TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
		"object-curly-newline": [0, {
			ObjectExpression: {
				minProperties: 2,
				multiline: true
			},
			ObjectPattern: {
				minProperties: 2,
				multiline: true
			}
		}],

		// enforce "same line" or "multiple line" on object properties.
		// http://eslint.org/docs/rules/object-property-newline
		"object-property-newline": 1,

		// allow just one var statement per function
		// TODO probably we should discuss var declarations
		"one-var": [1, {
			"uninitialized": "always",
			"initialized": "never"
		}],

		// require a newline around variable declaration
		// http://eslint.org/docs/rules/one-var-declaration-per-line
		"one-var-declaration-per-line": [2, "initializations"],

		// require assignment operator shorthand where possible or prohibit it entirely
		"operator-assignment": [0, "never"],

		// enforce operators to be placed before or after line breaks
		"operator-linebreak": [2, "after"],

		// enforce padding within blocks
		"padded-blocks": [1, "never"],

		// require quotes around object literal property names
		// http://eslint.org/docs/rules/quote-props.html
		"quote-props": [2, "as-needed", {
			"keywords": true,
			"unnecessary": false
		}],

		// specify whether double or single quotes should be used
		"quotes": [2, "double"],

		// do not require jsdoc
		// http://eslint.org/docs/rules/require-jsdoc
		// TODO configure this if we need to enforce proper documentation http://eslint.org/docs/rules/require-jsdoc
		"require-jsdoc": 0,

		// require or disallow use of semicolons instead of ASI
		"semi": [2, "always"],

		// enforce spacing before and after semicolons
		"semi-spacing": [2, {
			"before": false,
			"after": true
		}],

		// requires object keys to be sorted
		"sort-keys": 0,

		// sort variables within the same declaration block
		"sort-vars": 0,

		// require or disallow space before blocks
		"space-before-blocks": [2, "always"],

		// require or disallow space before function opening parenthesis
		// http://eslint.org/docs/rules/space-before-function-paren
		"space-before-function-paren": [2, "never"],

		// require or disallow spaces inside parentheses
		"space-in-parens": [2, "never"],

		// require spaces around operators
		"space-infix-ops": 2,

		// Require or disallow spaces before/after unary operators
		"space-unary-ops": [2, {
			"words": true,
			"nonwords": false
		}],

		// require or disallow a space immediately following the // or /* in a comment
		"spaced-comment": [1, "always", {"exceptions": ["-", "*"]}],

		// require or disallow the Unicode Byte Order Mark
		// http://eslint.org/docs/rules/unicode-bom
		"unicode-bom": [2, "never"],

		// require regex literals to be wrapped in parentheses
		"wrap-regex": 0
	}
};
