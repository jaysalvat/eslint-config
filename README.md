[![npm version](https://badge.fury.io/js/%40jaysalvat%2Feslint-config.svg)](https://badge.fury.io/js/%40jaysalvat%2Feslint-config)

Eslint + Prettier configuration 
===============================

## Usage

Install the npm package:

```sh
npm i @jaysalvat/eslint-config
```

In your project's `eslint.config.js` file (recent ESLint flat config):

If your project uses `"type": "module"` (ESM):

```js
import config from '@jaysalvat/eslint-config'

export default [
  ...config.flat
]
```

If your project uses CommonJS:

```js
const config = require('@jaysalvat/eslint-config')

module.exports = [
  ...config.flat
]
```

## Available presets

- `flat`: rules only
- `flatWithStyle`: rules + stylistic
- `vue`: rules + vue
- `vueWithStyle`: rules + vue + stylistic

## Configuration Prettier

Install Prettier in your project as well:

```sh
npm i -D prettier
```

Then create a `prettier.config.cjs` file:

```js
const { prettier } = require('@jaysalvat/eslint-config')

module.exports = prettier
```

If your project is ESM, you can use `prettier.config.mjs`:

```js
import config from '@jaysalvat/eslint-config'

export default config.prettier
```

## Further Reading

* [Eslint shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs)
* [How extend works](https://github.com/eslint/eslint/blob/master/docs/user-guide/configuring.md#extending-configuration-files)
