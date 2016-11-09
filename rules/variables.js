//
// Variables
//
// These rules have to do with variable declarations.
//

module.exports = {
	rules: {
		// enforce or disallow variable initializations at definition
		"init-declarations": [0, "always"],

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		"no-catch-shadow": 0,

		// disallow deletion of variables
		"no-delete-var": 2,

		// disallow labels that share a name with a variable
		"no-label-var": 2,

		// disallow specific globals
		"no-restricted-globals": [2, "event", "fdescribe"],

		// disallow declaration of variables already declared in the outer scope
		// but allow for globals, ES6 imports reported as error when imported module name is the same as exported
		"no-shadow": [2, { "builtinGlobals": false, "hoist": "all" }],

		// disallow shadowing of names such as arguments
		"no-shadow-restricted-names": 2,

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		"no-undef": 1,

		// disallow use of undefined when initializing variables
		"no-undef-init": 2,

		// disallow use of undefined variable
		"no-undefined": 0,

		// disallow declaration of variables that are not used in the code
		"no-unused-vars": 2, //[2, {vars: "local", args: "after-used"}]

		// disallow use of variables before they are defined
		"no-use-before-define": [1, {
			"functions": false,
			"classes": true
		}]
	}
};
