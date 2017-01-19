module.exports = {
	extends: [
		"./legacy",
		"./rules/es6",
		"./rules/imports"
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 6 ,
		sourceType: "module"
	},
	globals: {
		"Class": true,
		"Interface": true,
		"Environment": true,
		// 3rd Party Libraries
		"require": true,
		"requireClass": true,
		"define": true,
		"load": true,// Non-standard require.js lib
		"_": true,
		"$": true,
		"i18n": true,
		"Backbone": true,
		"Modernizr": true,
		"Silverlight": true,
		"Spinner": true,
		"CryptoJS": true,
		"timezoneJS": true,
		"sprintf": true,
		"moment": true,
		"lscache": true,
		"Uri": true,
		"FastClick": true,
		"webOS": true,
		"webapis": true,

		// Karma Tests
		"chai": true,
		"describe": true,
		"it": true,
		"console": true
	},
	rules: {
		strict: "error"
	}
};
