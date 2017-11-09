# eslint-config-norigin

This package provides NoriginMedia .eslintrc as an extensible shared config.

## Usage

Since we use ESlint ^3.0.1 you will need to have node 4+ to run it.

### eslint-config-norigin

Our default export contains all of our ESLint rules, including ECMAScript 2015+.

You can add next lines to your .eslintrc:

`"extends": "norigin"` - eslint (ECMAScript 2015+), import rules 

`"extends": "norigin/react"` - eslint (ECMAScript 2015+), react, import rules

`"extends": "norigin/react&accessibility"` - eslint (ECMAScript 2015+), react, react-a11y, import rules

`"extends": "norigin/react-native"` - eslint (ECMAScript 2015+), react, react-native, import rules

`"extends": "norigin/react-native&accessibility"` - eslint (ECMAScript 2015+), react, react-native react-a11y, import rules

`"extends": "norigin/legacy"` - eslint (ECMAScript 5)
