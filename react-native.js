module.exports = {
	extends: [
		"./index",
		"./rules/react",
		"./rules/react-native",
		"./rules/react-a11y"
	].map(require.resolve),
	rules: {}
};
