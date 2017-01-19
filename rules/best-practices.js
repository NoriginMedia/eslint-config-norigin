//
// Best Practices
//
// These are rules designed to prevent you from making mistakes.
// They either prescribe a better way of doing something or help you avoid footguns.
//

module.exports = {
	rules: {
		// enforces getter/setter pairs in objects
		"accessor-pairs": ["error", { "getWithoutSet": true }],

		// enforces return statements in callbacks of array"s methods
		// http://eslint.org/docs/rules/array-callback-return
		"array-callback-return": "error",

		// treat var statements as if they were block scoped
		"block-scoped-var": "error",

		// enforce that class methods utilize this
		"class-methods-use-this": "error",

		// specify the maximum cyclomatic complexity allowed in a program
		"complexity": ["off", 11],

		// require return statements to either always or never specify values
		"consistent-return": "warn",

		// specify curly brace conventions for all control statements
		"curly": ["error", "all"],

		// require default case in switch statements
		"default-case": "error",

		// enforces consistent newlines before or after dots
		"dot-location": ["error", "property"],

		// encourages use of dot notation whenever possible
		"dot-notation": ["warn", {"allowKeywords": true}],

		// require the use of === and !==
		// http://eslint.org/docs/rules/eqeqeq
		"eqeqeq": ["error", "allow-null"],

		// make sure for-in loops have an if statement
		"guard-for-in": "error",

		// disallow the use of alert, confirm, and prompt
		"no-alert": "error",

		// disallow use of arguments.caller or arguments.callee
		"no-caller": "error",

		// disallow lexical declarations in case/default clauses
		// http://eslint.org/docs/rules/no-case-declarations.html
		"no-case-declarations": "error",

		// disallow division operators explicitly at beginning of regular expression
		"no-div-regex": "error",

		// disallow else after a return in an if
		"no-else-return": "error",

		// disallow empty functions, except for standalone funcs/arrows
		// http://eslint.org/docs/rules/no-empty-function
		"no-empty-function": ["error", {
			allow: [
				"functions"
			]
		}],

		// disallow empty destructuring patterns
		// http://eslint.org/docs/rules/no-empty-pattern
		"no-empty-pattern": "error",

		// disallow comparisons to null without a type-checking operator
		"no-eq-null": "error",

		// disallow use of eval()
		"no-eval": "error",

		// disallow adding to native types
		"no-extend-native": "error",

		// disallow unnecessary function binding
		"no-extra-bind": "error",

		// disallow Unnecessary Labels
		// http://eslint.org/docs/rules/no-extra-label
		"no-extra-label": "error",

		// disallow fallthrough of case statements
		"no-fallthrough": "error",

		// disallow the use of leading or trailing decimal points in numeric literals
		"no-floating-decimal": "error",

		// disallow reassignments of native objects
		"no-global-assign": "error",

		// disallow the type conversions with shorter notations
		"no-implicit-coercion": ["error", {
			"boolean": true,
			"number": true,
			"string": true,
			"allow": ["!!"]
		}],

		// disallow var and named functions in global scope
		// http://eslint.org/docs/rules/no-implicit-globals
		"no-implicit-globals": "error",

		// disallow use of eval()-like methods
		"no-implied-eval": "error",

		// disallow this keywords outside of classes or class-like objects
		"no-invalid-this": "off",

		// disallow usage of __iterator__ property
		"no-iterator": "error",

		// disallow use of labels for anything other then loops and switches
		"no-labels": "error",

		// disallow unnecessary nested blocks
		"no-lone-blocks": "error",

		// disallow creation of functions within loops
		"no-loop-func": "error",

		// disallow magic numbers
		// http://eslint.org/docs/rules/no-magic-numbers
		// TODO deal with magic numbers someday
		"no-magic-numbers": ["off", {
			ignore: [],
			ignoreArrayIndexes: false,
			enforceConst: true,
			detectObjects: false
		}],

		// disallow use of multiple spaces
		"no-multi-spaces": "error",

		// disallow use of multiline strings
		"no-multi-str": "error",

		// disallow use of new operator when not part of the assignment or comparison
		"no-new": "off",

		// disallow use of new operator for Function object
		"no-new-func": "error",

		// disallows creating new instances of String, Number, and Boolean
		"no-new-wrappers": "error",

		// disallow use of (old style) octal literals
		"no-octal": "error",

		// disallow use of octal escape sequences in string literals, such as
		// var foo = "Copyright \251";
		"no-octal-escape": "error",

		// disallow reassignment of function parameters
		// disallow parameter object manipulation
		// rule: http://eslint.org/docs/rules/no-param-reassign.html
		"no-param-reassign": "error",

		// disallow usage of __proto__ property
		"no-proto": "error",

		// disallow declaring the same variable more then once
		"no-redeclare": ["error", {"builtinGlobals": true}],

		// disallow use of assignment in return statement
		"no-return-assign": "error",

		// disallow unnecessary return await
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

		// restrict what can be thrown as an exception
		"no-throw-literal": "error",

		// disallow unmodified conditions of loops
		// http://eslint.org/docs/rules/no-unmodified-loop-condition
		"no-unmodified-loop-condition": "error",

		// disallow usage of expressions in statement position
		"no-unused-expressions": ["error", {
			"allowShortCircuit": true,
			"allowTernary": true
		}],

		// disallow unused labels
		// http://eslint.org/docs/rules/no-unused-labels
		"no-unused-labels": "error",

		// disallow unnecessary .call() and .apply()
		"no-useless-call": "error",

		// disallow useless string concatenation
		// http://eslint.org/docs/rules/no-useless-concat
		"no-useless-concat": "error",

		// disallow unnecessary string escaping
		// http://eslint.org/docs/rules/no-useless-escape
		"no-useless-escape": "error",

		// disallow redundant return statements
		"no-useless-return": "error",

		// disallow use of void operator
		"no-void": "error",

		// disallow usage of configurable warning terms in comments: e.g. todo
		"no-warning-comments": ["off", {
			"terms": ["todo", "fixme"],
			"location": "start"
		}],

		// disallow use of the with statement
		"no-with": "error",

		// require use of the second argument for parseInt()
		"radix": "error",

		// require `await` in `async function` (note: this is a horrible rule that should never be used)
		// http://eslint.org/docs/rules/require-await
		"require-await": "off",

		// requires to declare all vars on top of their containing scope
		// TODO move all vars on top someday
		"vars-on-top": "warn",

		// require immediate function invocation to be wrapped in parentheses
		// http://eslint.org/docs/rules/wrap-iife.html
		"wrap-iife": ["error", "any"],

		// require or disallow Yoda conditions
		"yoda": ["error", "never", { "exceptRange": true }]
	}
};
