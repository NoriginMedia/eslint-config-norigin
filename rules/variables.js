//
// Variables
//
// These rules have to do with variable declarations.
//

module.exports = {
	rules: {
		// enforce or disallow variable initializations at definition
		"init-declarations": ["off", "always"],

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		"no-catch-shadow": "off",

		// disallow deletion of variables
		"no-delete-var": "error",

		// disallow labels that share a name with a variable
		"no-label-var": "error",

		// disallow specific globals
		"no-restricted-globals": ["error", "event", "fdescribe"],

		// disallow declaration of variables already declared in the outer scope
		// but allow for globals, ES6 imports reported as error when imported module name is the same as exported
		"no-shadow": ["error", { "builtinGlobals": false, "hoist": "all" }],

		// disallow shadowing of names such as arguments
		"no-shadow-restricted-names": "error",

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		"no-undef": "warn",

		// disallow use of undefined when initializing variables
		"no-undef-init": "error",

		// disallow use of undefined variable
		"no-undefined": "off",

		// disallow declaration of variables that are not used in the code
		"no-unused-vars": "error", //["error", {vars: "local", args: "after-used"}]

		// disallow use of variables before they are defined
		"no-use-before-define": ["warn", {
			"functions": false,
			"classes": true
		}]
	}
};
