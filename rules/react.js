module.exports = {
	plugins: [
		"react",
		"react-native"
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	// View link below for react rules documentation
	// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
	rules: {
		"class-methods-use-this": ["error", {
			exceptMethods: [
				"render",
				"getInitialState",
				"getDefaultProps",
				"getChildContext",
				"componentWillMount",
				"componentDidMount",
				"componentWillReceiveProps",
				"shouldComponentUpdate",
				"componentWillUpdate",
				"componentDidUpdate",
				"componentWillUnmount"
			]
		}],

		// Enforces consistent naming for boolean props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
		// TODO require finetune and discussion
		"react/boolean-prop-naming":["warn", {
			propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
			rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+"
		}],

		// Forbid "button" element without an explicit "type" attribute
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
		"react/button-has-type": "error",

		// Prevent extraneous defaultProps on components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
		"react/default-props-match-prop-types": "error",

		// Rule enforces consistent usage of destructuring assignment in component
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
		// todo need to be discussed
		"react/destructuring-assignment": "off",

		// Prevent missing displayName in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		"react/display-name": ["off", {ignoreTranspilerName: false}],

		// Forbid certain props on Components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
		"react/forbid-component-props": ["off", {forbid: []}],

		// Forbid certain props on DOM Nodes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
		"react/forbid-dom-props": "error",

		// Forbid certain elements
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
		"react/forbid-elements": ["off", {forbid: []}],

		// Forbid certain propTypes (any, array, object)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
		"react/forbid-prop-types": ["off", {forbid: ["any", "array", "object"]}],

		// Forbid foreign propTypes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
		"react/forbid-foreign-prop-types": "error",

		// Prevent using this.state inside this.setState
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
		"react/no-access-state-in-setstate": "error",

		// Prevent usage of Array index in keys
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		"react/no-array-index-key": ["off"],

		// Prevent passing children as props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
		"react/no-children-prop": "error",

		// Prevent usage of dangerous JSX properties
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		"react/no-danger": "error",

		// Prevent problem with children and props.dangerouslySetInnerHTML
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		"react/no-danger-with-children": "error",

		// Prevent usage of deprecated methods
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		"react/no-deprecated": "error",

		// Prevent usage of setState in componentDidMount
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
		"react/no-did-mount-set-state": "error",

		// Prevent usage of setState in componentDidUpdate
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
		"react/no-did-update-set-state": "error",

		// Prevent direct mutation of this.state
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
		"react/no-direct-mutation-state": "error",

		// warn against using findDOMNode()
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
		"react/no-find-dom-node": "error",

		// Prevent usage of isMounted
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		"react/no-is-mounted": "error",

		// Prevent multiple component definition per file
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		"react/no-multi-comp": ["error", {ignoreStateless: true}],

		// Prevent usage of shouldComponentUpdate when extending React.PureComponent
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
		"react/no-redundant-should-component-update": "error",

		// disallow using React.render/ReactDOM.render"s return value
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		"react/no-render-return-value": "error",

		// Prevent usage of setState
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
		"react/no-set-state": "off",

		// Prevent common casing typos
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
		"react/no-typos": "error",

		// Prevent using string references
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
		"react/no-string-refs": "error",

		// Prevent using this in stateless functional components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
		"react/no-this-in-sfc": "error",

		// Prevent invalid characters from appearing in markup
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		"react/no-unescaped-entities": "error",

		// Prevent usage of unknown DOM property
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		"react/no-unknown-property": "error",

		// Prevent definitions of unused prop types
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
		"react/no-unused-prop-types": ["error", {
			customValidators: [],
			skipShapeProps: true
		}],

		// MISSING IN DOCUMENTATION no-unused-state
		"react/no-unused-state": "error",

		// Prevent usage of setState in componentWillUpdate
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
		"react/no-will-update-set-state": "error",

		// Require ES6 class declarations over React.createClass
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		"react/prefer-es6-class": ["error", "always"],

		// Require stateless functions when not using lifecycle methods, setState or ref
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		"react/prefer-stateless-function": "error",

		// Prevent missing props validation in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		"react/prop-types": ["error", {ignore: ["children"], customValidators: []}],

		// Prevent missing React when using JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		"react/react-in-jsx-scope": "error",

		// Enforce a defaultProps definition for every prop that is not a required prop
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
		"react/require-default-props": "error",

		// require a shouldComponentUpdate method, or PureRenderMixin
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
		"react/require-optimization": ["off", {allowDecorators: []}],

		// Require render() methods to return something
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		"react/require-render-return": "error",

		// Prevent extra closing tags for components without children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		"react/self-closing-comp": "error",

		// Enforce component methods order
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
		"react/sort-comp": ["error", {
			order: [
				"static-methods",
				"lifecycle",
				"/^on.+$/",
				"/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
				"everything-else",
				"/^render.+$/",
				"render"
			]
		}],

		// Enforce propTypes declarations alphabetical sorting
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
		"react/sort-prop-types": ["off", {
			ignoreCase: false,
			callbacksLast: false,
			requiredFirst: false
		}],

		// Enforce style prop value being an object
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
		"react/style-prop-object": "error",

		// Prevent void DOM elements (e.g. <img />, <br />) from receiving children
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
		"react/void-dom-elements-no-children": "error",


		// JSX-specific rules

		// Enforce boolean attributes notation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		"react/jsx-boolean-value": ["error", "never"],

		// Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
		"react/jsx-child-element-spacing": "error",

		// Validate closing bracket location in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		"react/jsx-closing-bracket-location": ["error", "line-aligned"],

		// Validate closing tag location in JSX (fixable)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
		"react/jsx-closing-tag-location": ["off"],

		// Enforce or disallow spaces inside of curly braces in JSX attributes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		"react/jsx-curly-spacing": ["error", "never", {allowMultiline: true}],

		// Enforce spacing around jsx equals signs
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		"react/jsx-equals-spacing": ["error", "never"],

		// only .jsx files may have JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		"react/jsx-filename-extension": ["warn", {extensions: [".js", ".jsx"]}],

		// Require that the first prop in a JSX element be on a new line when the element is multiline
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
		"react/jsx-first-prop-new-line": ["error", "multiline"],

		// Enforce event handler naming conventions in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		"react/jsx-handler-names": ["off", {
			eventHandlerPrefix: "handle",
			eventHandlerPropPrefix: "on"
		}],

		// Enforce JSX indentation
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		"react/jsx-indent": ["error", 2],

		// Validate props indentation in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		"react/jsx-indent-props": ["error", 2],

		// Validate JSX has key prop when in array or iterator
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		"react/jsx-key": "off",

		// Validate JSX maximum depth
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
		"react/jsx-max-depth": ["error", { "max": 4}],

		// Limit maximum of props on a single line in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		"react/jsx-max-props-per-line": ["error", {maximum: 1}],

		// Prevent usage of .bind() in JSX props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		"react/jsx-no-bind": ["error", {
			ignoreRefs: true,
			allowArrowFunctions: true,
			allowBind: false
		}],

		// prevent accidental JS comments from being injected into JSX as text
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
		"react/jsx-no-comment-textnodes": "error",

		// Prevent duplicate props in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		"react/jsx-no-duplicate-props": ["error", {ignoreCase: true}],

		// Prevent usage of unwrapped JSX strings
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
		"react/jsx-no-literals": "off",

		// Disallow target="_blank" on links
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
		"react/jsx-no-target-blank": "error",

		// Disallow undeclared variables in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		"react/jsx-no-undef": "error",

		// Limit to one expression per line in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
		"react/jsx-one-expression-per-line": "error",

		// Enforce curly braces or disallow unnecessary curly braces in JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		"react/jsx-curly-brace-presence": ["error", {
			props: "always",
			children: "never"
		}],

		// Enforce PascalCase for user-defined JSX components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		"react/jsx-pascal-case": ["error", {
			allowAllCaps: true,
			ignore: []
		}],

		// Enforce default props alphabetical sorting
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
		"react/jsx-sort-default-props": "off",

		// Enforce props alphabetical sorting
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		// todo discuss
		"react/jsx-sort-props": ["off", {
			ignoreCase: false,
			callbacksLast: false,
			shorthandFirst: false,
			shorthandLast: false
		}],

		// Validate whitespace in and around the JSX opening and closing brackets
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
		"react/jsx-tag-spacing": ["error", {
			closingSlash: "never",
			beforeSelfClosing: "always",
			afterOpening: "never"
		}],

		// Prevent React to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		"react/jsx-uses-react": "error",

		// Prevent variables used in JSX to be incorrectly marked as unused
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		"react/jsx-uses-vars": "error",

		// Prevent missing parentheses around multilines JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
		"react/jsx-wrap-multilines": ["error", {
			declaration: true,
			assignment: true,
			return: true
		}]
	},

	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".json"]
			}
		},
		react: {
			pragma: "React",
			version: "0.15"
		}
	}
};
