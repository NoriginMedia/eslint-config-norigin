# eslint-config-norigin

This package provides NoriginMedia .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.
Since we use ESlint ^3.0.1 you will need to have node 4+ to run it.

### eslint-config-norigin

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import` if we decide to use additional rules for import.

add `"extends": "norigin"` to your .eslintrc
