[![npm version](https://badge.fury.io/js/%40jaysalvat%2Feslint-config.svg)](https://badge.fury.io/js/%40jaysalvat%2Feslint-config)

Eslint configuration 
====================

## Usage

Install npm package

```sh
npm install @jaysalvat/eslint-config
```

Inside your project `eslint.config.js` file (ESLint récent)

If your project uses `"type": "module"` (ESM):

```js
import jaysalvat from '@jaysalvat/eslint-config'

export default [
    ...jaysalvat
]
```

If your project uses CommonJS:

```js
const jaysalvat = require('@jaysalvat/eslint-config')

module.exports = [
    ...jaysalvat
]
```

## Presets disponibles

- `flat`: rules uniquement
- `flatWithStyle`: rules + stylistic
- `vue`: rules + vue
- `vueWithStyle`: rules + vue + stylistic

### ESM (`"type": "module"`)

```js
import jaysalvat from '@jaysalvat/eslint-config'

export default [
    ...jaysalvat.flat
]
```

```js
import jaysalvat from '@jaysalvat/eslint-config'

export default [
    ...jaysalvat.flatWithStyle
]
```

```js
import jaysalvat from '@jaysalvat/eslint-config'

export default [
    ...jaysalvat.vue
]
```

```js
import jaysalvat from '@jaysalvat/eslint-config'

export default [
    ...jaysalvat.vueWithStyle
]
```

### CommonJS

```js
const jaysalvat = require('@jaysalvat/eslint-config')

module.exports = [
    ...jaysalvat.flat
]
```

```js
const jaysalvat = require('@jaysalvat/eslint-config')

module.exports = [
    ...jaysalvat.flatWithStyle
]
```

```js
const jaysalvat = require('@jaysalvat/eslint-config')

module.exports = [
    ...jaysalvat.vue
]
```

```js
const jaysalvat = require('@jaysalvat/eslint-config')

module.exports = [
    ...jaysalvat.vueWithStyle
]
```

Legacy usage (`.eslintrc.*`)

```js
{
    "extends": "@jaysalvat/eslint-config/legacy"
}
```

## Further Reading

* [Eslint shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs)
* [How extend works](https://github.com/eslint/eslint/blob/master/docs/user-guide/configuring.md#extending-configuration-files)
