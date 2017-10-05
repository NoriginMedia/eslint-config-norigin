module.exports = {
	plugins: [
		"jsx-a11y",
		"react"
	],
	ecmaFeatures: {
		jsx: true
	},
	rules: {
		// Enforce emojis are wrapped in and provide screenreader access
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
		"jsx-a11y/accessible-emoji": "error",

		// Enforce all elements that require alternative text have meaningful information to relay back to end user
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
		"jsx-a11y/alt-text": [ "error", {
			"elements": [ "img", "object", "area", "input[type=\"image\"]" ],
			"img": ["Image"]
		}],

		// Enforce that anchors have content
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
		"jsx-a11y/anchor-has-content": ["error", {components: [""]}],

		// Enforce all anchors are valid, navigable elements
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
		"jsx-a11y/anchor-is-valid": "error",

		// Enforce elements with aria-activedescendant are tabbable.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
		"jsx-a11y/aria-activedescendant-has-tabindex": "error",

		// Enforce all aria-* props are valid.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
		"jsx-a11y/aria-props": "error",

		// Enforce ARIA state and property values are valid.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
		"jsx-a11y/aria-proptypes": "error",

		// Require ARIA roles to be valid and non-abstract
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
		"jsx-a11y/aria-role": "error",

		// Enforce that elements that do not support ARIA roles, states, and
		// properties do not have those attributes.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
		"jsx-a11y/aria-unsupported-elements": "error",

		// Enforce a clickable non-interactive element has at least one keyboard event listener.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
		"jsx-a11y/click-events-have-key-events": "off",

		// Enforce heading (h1, h2, etc) elements contain accessible content.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
		"jsx-a11y/heading-has-content": ["error", {components: [""]}],

		// require HTML elements to have a "lang" prop
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
		"jsx-a11y/html-has-lang": "error",

		// Enforce iframe elements have a title attribute
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
		"jsx-a11y/iframe-has-title": "error",

		// Prevent img alt text from containing redundant words like "image", "picture", or "photo"
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
		"jsx-a11y/img-redundant-alt": "error",

		// Enforce that elements with interactive handlers like onClick must be focusable
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
		"jsx-a11y/interactive-supports-focus": "error",

		// require that JSX labels use "htmlFor"
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
		"jsx-a11y/label-has-for": ["error", {components: ["label"]}],

		// require HTML element"s lang prop to be valid
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
		"jsx-a11y/lang": "error",

		// Enforces that <audio> and <video> elements must have a <track> for captions
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
		"jsx-a11y/media-has-caption": "error",

		// require that mouseover/out come with focus/blur, for keyboard-only users
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
		"jsx-a11y/mouse-events-have-key-events": "off",

		// Prevent use of `accessKey`
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
		"jsx-a11y/no-access-key": "error",

		// Enforce autoFocus prop is not used`
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
		"jsx-a11y/no-autofocus": [ "error", {
			"ignoreNonDOM": true
		}],

		// Enforce distracting elements are not used
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
		"jsx-a11y/no-distracting-elements": "error",

		// Interactive elements should not be assigned non-interactive roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
		"jsx-a11y/no-interactive-element-to-noninteractive-role": "error",

		// Non-interactive elements should not be assigned mouse or keyboard event listeners
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
		"jsx-a11y/no-noninteractive-element-interactions": ["error", {
			handlers: [
				"onClick",
				"onMouseDown",
				"onMouseUp",
				"onKeyPress",
				"onKeyDown",
				"onKeyUp"
			]
		}],

		// Non-interactive elements should not be assigned interactive roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
		"jsx-a11y/no-noninteractive-element-to-interactive-role": ["error",	{
			ul: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
			ol: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
			li: ["menuitem", "option", "row", "tab", "treeitem"],
			table: ["grid"],
			td: ["gridcell"]
		}],

		// tabIndex should only be declared on interactive elements
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
		"no-noninteractive-tabindex": ['error', {
			tags: [],
			roles: ['tabpanel']
		}],

		// require onBlur instead of onChange
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
		"jsx-a11y/no-onchange": "off",

		// Enforce explicit role property is not the same as implicit/default role property on element
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
		"jsx-a11y/no-redundant-roles": "error",

		// Enforce that DOM elements without semantic behavior not have interaction handlers
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
		"jsx-a11y/no-static-element-interactions": "error",

		// Enforce that elements with ARIA roles must have all required attributes for that role.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
		"jsx-a11y/role-has-required-aria-props": "error",

		// Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
		"jsx-a11y/role-supports-aria-props": "error",

		// only allow <th> to have the "scope" attr
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
		"jsx-a11y/scope": "error",

		// Enforce tabIndex value is not greater than zero.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
		"jsx-a11y/tabindex-no-positive": "error"
	}
};
