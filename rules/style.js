//
//Stylistic Issues
//
// These rules are purely matters of style and are quite subjective.
//

module.exports = {
	rules: {
		// enforce linebreaks after opening and before closing array brackets
		"array-bracket-newline": ["error", "consistent"],

		// enforce spacing inside array brackets
		"array-bracket-spacing": ["error", "never"],

		// enforce line breaks after each array element
		// TODO enable as soon as "consistent" option will be added
		"array-element-newline": ["off", {"multiline": true}],

		// enforce spacing inside single-line blocks
		// http://eslint.org/docs/rules/block-spacing
		"block-spacing": ["off", "never"],

		// enforce one true brace style
		"brace-style": "error",

		// require camel case names
		"camelcase": ["error", {properties: "never"}],

		// enforce or disallow capitalization of the first letter of a comment
		// http://eslint.org/docs/rules/capitalized-comments
		"capitalized-comments": ["off", "never"],

		// enforce spacing before and after comma
		"comma-spacing": ["error", {
			before: false,
			after: true
		}],

		// enforce one true comma style
		"comma-style": ["error", "last"],

		// disallow padding inside computed properties
		"computed-property-spacing": ["error", "never"],

		// enforces consistent naming when capturing the current execution context
		"consistent-this": ["error", "that", "service"],

		// enforce newline at the end of file, with no multiple empty lines
		"eol-last": "error",

		// disallow space between function identifier and application
		"func-call-spacing": ["error", "never"],

		// require function names to match the name of the variable or property to which they are assigned
		"func-name-matching": "error",

		// require function expressions to have a name
		// TODO should all our function expressions have names
		"func-names": "off",

		// enforces use of function declarations or expressions
		"func-style": "off",

		// enforce consistent line breaks inside function parentheses
		"function-paren-newline": ["error", "multiline"],

		// Blacklist certain identifiers to prevent them being used
		// http://eslint.org/docs/rules/id-blacklist
		"id-blacklist": ["off", "data", "err", "e", "cb", "callback"],

		// this option enforces minimum and maximum identifier lengths
		// (variable names, property names etc.)
		"id-length": ["warn", {
			"min": 2,
			"max": 60,
			"properties": "never",
			"exceptions": ["i", "j", "e", "m", "h", "d", "x", "y", "z"]
		}],

		// require identifiers to match the provided regular expression
		"id-match": "off",

		// enforce the location of arrow function bodies
		"implicit-arrow-linebreak": ["error", "beside"],

		// this option sets a specific tab width for your code
		// http://eslint.org/docs/rules/indent
		"indent": ["error", 2, { "SwitchCase": 1 }],

		// specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		"jsx-quotes": ["error", "prefer-double"],

		// enforces spacing between keys and values in object literal properties
		"key-spacing": ["warn", {
			"beforeColon": false,
			"afterColon": true
		}],

		// require a space before & after certain keywords
		"keyword-spacing": "error",

		// enforce position of line comments
		"line-comment-position": ["off"],

		// disallow mixed "LF" and "CRLF" as linebreaks
		"linebreak-style": ["error", "unix"],

		// enforces empty lines around comments
		"lines-around-comment": ["warn", {
			"beforeBlockComment": true,
			"afterBlockComment": false,
			"beforeLineComment": true,
			"afterLineComment": false,
			"allowBlockStart": true,
			"allowObjectStart": true,
			"allowArrayStart": true
		}],

		// require or disallow an empty line between class members
		"lines-between-class-members": ["error", "always"],

		// specify the maximum depth that blocks can be nested
		"max-depth": ["error", {"maximum": 5}],

		// specify the maximum length of a line in your program
		// http://eslint.org/docs/rules/max-len
		"max-len": ["warn", {
			"code": 120,
			"tabWidth": 4,
			"ignoreUrls": true
		}],

		// specify the max number of lines in a file
		// http://eslint.org/docs/rules/max-lines
		// TODO should we keep files small
		"max-lines": ["off", {
			max: 500,
			skipBlankLines: true,
			skipComments: true
		}],

		// specify the maximum depth callbacks can be nested
		"max-nested-callbacks": ["error", {"maximum": 3}],

		// limits the number of parameters that can be used in the function declaration.
		// TODO deal with funtions with big number of params someday
		"max-params": ["off", {"maximum": 5}],

		// specify the maximum number of statement allowed in a function
		// TODO deal with max statements someday
		"max-statements": "off",

		// restrict the number of statements per line
		// http://eslint.org/docs/rules/max-statements-per-line
		"max-statements-per-line": ["error", { "max": 3 }],

		// enforce a particular style for multiline comments
		"multiline-comment-style": ["warn", "bare-block"],

		//	enforce newlines between operands of ternary expressions
		"multiline-ternary": "off",

		// require a capital letter for constructors
		"new-cap": ["error", {"capIsNew": false}],

		// disallow the omission of parentheses when invoking a constructor with no arguments
		"new-parens": "error",

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// http://eslint.org/docs/rules/newline-per-chained-call
		"newline-per-chained-call": ["error", {"ignoreChainWithDepth": 4}],

		// disallow use of the Array constructor
		"no-array-constructor": "error",

		// disallow use of bitwise operators
		"no-bitwise": "error",

		// disallow use of the continue statement
		"no-continue": "error",

		// disallow comments inline after code
		"no-inline-comments": ["off"],

		// disallow if as the only statement in an else block
		"no-lonely-if": "error",

		// disallow un-paren"d mixes of different operators
		// http://eslint.org/docs/rules/no-mixed-operators
		"no-mixed-operators": ["error", {
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
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],

		// disallow use of chained assignment expressions
		"no-multi-assign": "error",

		// disallow multiple empty lines and only one newline at the end
		"no-multiple-empty-lines": ["warn", {
			"max": 1,
			"maxEOF": 0
		}],

		// disallow negated conditions
		// http://eslint.org/docs/rules/no-negated-condition
		// TODO decide if we need to remove negated conditions
		"no-negated-condition": "off",

		// disallow nested ternary expressions
		"no-nested-ternary": "error",

		// disallow use of the Object constructor
		"no-new-object": "error",

		// disallow use of unary operators, ++ and --
		"no-plusplus": "off",

		// disallow certain syntax forms
		// http://eslint.org/docs/rules/no-restricted-syntax
		// TODO require fine tune http://eslint.org/docs/rules/no-restricted-syntax
		"no-restricted-syntax": ["off",
			"DebuggerStatement",
			"ForInStatement",
			"LabeledStatement",
			"WithStatement"
		],

		// disallow tabs in file
		"no-tabs": "off",

		// disallow the use of ternary operators
		"no-ternary": "off",

		// disallow trailing whitespace at the end of lines
		"no-trailing-spaces": "error",

		// disallow dangling underscores in identifiers
		"no-underscore-dangle": ["off"],

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// http://eslint.org/docs/rules/no-unneeded-ternary
		"no-unneeded-ternary": ["error", {"defaultAssignment": true }],

		// disallow whitespace before properties
		// http://eslint.org/docs/rules/no-whitespace-before-property
		"no-whitespace-before-property": "error",

		// enforce the location of single-line statements
		"nonblock-statement-body-position": ["error", "below"],

		// require padding inside curly braces
		"object-curly-spacing": ["error", "never"],

		// enforce line breaks between braces
		// http://eslint.org/docs/rules/object-curly-newline
		"object-curly-newline": ["error", {
			"multiline": true,
			"consistent": true
		}],

		// enforce "same line" or "multiple line" on object properties.
		// http://eslint.org/docs/rules/object-property-newline
		"object-property-newline": "error",

		// allow just one var statement per function
		// TODO probably we should discuss var declarations
		"one-var": ["warn", {
			"uninitialized": "always",
			"initialized": "never"
		}],

		// require a newline around variable declaration
		// http://eslint.org/docs/rules/one-var-declaration-per-line
		"one-var-declaration-per-line": ["error", "initializations"],

		// require assignment operator shorthand where possible or prohibit it entirely
		"operator-assignment": ["off", "never"],

		// enforce operators to be placed before or after line breaks
		"operator-linebreak": ["error", "after"],

		// enforce padding within blocks
		"padded-blocks": ["warn", "never"],

		// TODO add more rules regarding formatting
		// require or disallow padding lines between statements
		"padding-line-between-statements": ["warn",
		    {blankLine: "always", prev: "*", next: "return" },
			{blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            {blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
			{blankLine: "always", prev: "directive", next: "*"},
            {blankLine: "any",    prev: "directive", next: "directive"}
		],

		// require quotes around object literal property names
		// http://eslint.org/docs/rules/quote-props.html
		"quote-props": ["error", "as-needed", {
			"keywords": true,
			"unnecessary": false
		}],

		// specify whether double or single quotes should be used
		"quotes": ["error", "single", "avoid-escape"],

		// do not require jsdoc
		// http://eslint.org/docs/rules/require-jsdoc
		// TODO configure this if we need to enforce proper documentation http://eslint.org/docs/rules/require-jsdoc
		"require-jsdoc": "off",

		// require or disallow use of semicolons instead of ASI
		"semi": ["error", "always"],

		// enforce spacing before and after semicolons
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],

		// enforce location of semicolons
		"semi-style": ["error", "last"],

		// requires object keys to be sorted
		"sort-keys": "off",

		// sort variables within the same declaration block
		"sort-vars": "off",

		// require or disallow space before blocks
		"space-before-blocks": ["error", "always"],

		// require or disallow space before function opening parenthesis
		// http://eslint.org/docs/rules/space-before-function-paren
		"space-before-function-paren": ["error", "never"],

		// require or disallow spaces inside parentheses
		"space-in-parens": ["error", "never"],

		// require spaces around operators
		"space-infix-ops": "error",

		// Require or disallow spaces before/after unary operators
		"space-unary-ops": ["error", {
			"words": true,
			"nonwords": false
		}],

		// require or disallow a space immediately following the // or /* in a comment
		"spaced-comment": ["warn", "always", {"exceptions": ["-", "*"]}],

		// enforce spacing around colons of switch statements
		"switch-colon-spacing": "error",

		// require or disallow spacing between template tags and their literals
		"template-tag-spacing": "error",

		// require or disallow the Unicode Byte Order Mark
		// http://eslint.org/docs/rules/unicode-bom
		"unicode-bom": ["error", "never"],

		// require regex literals to be wrapped in parentheses
		"wrap-regex": "off"
	}
};
