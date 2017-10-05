module.exports = {
	extends: [
		"./index",
		"./rules/react",
		"./rules/react-native"
	].map(require.resolve),
	rules: {}
};
