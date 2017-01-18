//
// ECMAScript 6
//
// These rules are only relevant to ES6 environments and are off by default.
//

module.exports = {
	env: {
		es6: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			"arrowFunctions": true,
			"binaryLiterals": true,
			"blockBindings": true,
			"classes": true,
			"defaultParams": true,
			"destructuring": true,
			"experimentalObjectRestSpread": true,
			"forOf": true,
			"generators": true,
			"modules": true,
			"objectLiteralComputedProperties": true,
			"objectLiteralDuplicateProperties": true,
			"objectLiteralShorthandMethods": true,
			"objectLiteralShorthandProperties": true,
			"octalLiterals": true,
			"regexUFlag": true,
			"regexYFlag": true,
			"spread": true,
			"superInFunctions": true,
			"templateStrings": true,
			"unicodeCodePointEscapes": true,
			"globalReturn": true,
			"jsx": true
		}
	},

	rules: {
		// enforces no braces where they can be omitted
		// http://eslint.org/docs/rules/arrow-body-style
		"arrow-body-style": ["error", "as-needed"],

		// require parens in arrow function arguments
		"arrow-parens": ["error", "always"],

		// require space before/after arrow function"s arrow
		// http://eslint.org/docs/rules/arrow-spacing
		"arrow-spacing": ["error", {
			"before": true,
			"after": true
		}],

		// verify super() callings in constructors
		"constructor-super": "error",

		// enforce the spacing around the * in generator functions
		// http://eslint.org/docs/rules/generator-star-spacing
		"generator-star-spacing": ["error", "before"],

		// disallow modifying variables of class declarations
		// http://eslint.org/docs/rules/no-class-assign
		"no-class-assign": "error",

		// disallow arrow functions where they could be confused with comparisons
		// http://eslint.org/docs/rules/no-confusing-arrow
		"no-confusing-arrow": ["error", {"allowParens": false}],

		// disallow modifying variables that are declared using const
		"no-const-assign": "error",

		// disallow duplicate class members
		// http://eslint.org/docs/rules/no-dupe-class-members
		"no-dupe-class-members": "error",

		// disallow importing from the same path more than once
		// http://eslint.org/docs/rules/no-duplicate-imports
		"no-duplicate-imports": ["error", { "includeExports": true }],

		// disallow symbol constructor
		// http://eslint.org/docs/rules/no-new-symbol
		"no-new-symbol": "error",

		// disallow specific imports
		// http://eslint.org/docs/rules/no-restricted-imports
		"no-restricted-imports": "off",

		// disallow to use this/super before super() calling in constructors.
		"no-this-before-super": "error",

		// disallow useless computed property keys
		// http://eslint.org/docs/rules/no-useless-computed-key
		"no-useless-computed-key": "error",

		// disallow unnecessary constructor
		// http://eslint.org/docs/rules/no-useless-constructor
		"no-useless-constructor": "error",

		// disallow renaming import, export, and destructured assignments to the same name
		// http://eslint.org/docs/rules/no-useless-rename
		"no-useless-rename": ["error", {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false
		}],

		// require let or const instead of var
		"no-var": "off",

		// require method and property shorthand syntax for object literals
		// http://eslint.org/docs/rules/object-shorthand
		"object-shorthand": ["error", "always"],

		// suggest using arrow functions as callbacks
		// TODO replace all anoninumous functions callback with arrow-callback
		"prefer-arrow-callback": "warn",

		// suggest using of const declaration for variables that are never modified after declared
		"prefer-const": ["error", {
			destructuring: "any",
			ignoreReadBeforeAssign: true
		}],

		// disallow parseInt() in favor of binary, octal, and hexadecimal literals
		"prefer-numeric-literals": "error",

		// suggest using Reflect methods where applicable
		"prefer-reflect": "warn",

		// use rest parameters instead of arguments
		// http://eslint.org/docs/rules/prefer-rest-params
		"prefer-rest-params": "warn",

		// suggest using the spread operator instead of .apply()
		"prefer-spread": "warn",

		// suggest using template literals instead of string concatenation
		// http://eslint.org/docs/rules/prefer-template
		"prefer-template": "warn",

		// disallow generator functions that do not have yield
		"require-yield": "off",

		// enforce spacing between object rest-spread
		// http://eslint.org/docs/rules/rest-spread-spacing
		"rest-spread-spacing": ["error", "never"],

		// require symbol descriptions
		"symbol-description": "error",

		// import sorting
		// http://eslint.org/docs/rules/sort-imports
		// TODO should we sort our imports in some specific way for better code readability http://eslint.org/docs/rules/sort-imports
		"sort-imports": "off",

		// enforce usage of spacing in template strings
		// http://eslint.org/docs/rules/template-curly-spacing
		"template-curly-spacing": ["error", "never"],

		// enforce spacing around the * in yield* expressions
		// http://eslint.org/docs/rules/yield-star-spacing
		"yield-star-spacing": ["error", "before"]
	}
};
