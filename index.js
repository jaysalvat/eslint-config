const js = require('@eslint/js')
const vue = require('eslint-plugin-vue')
const globals = require('globals')
const rules = require('./rules.js')
const rulesStyle = require('./rules.style.js')
const rulesVue = require('./rules.vue.js')

const baseConfig = {
	...js.configs.recommended,
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		globals: {
			...globals.browser,
			...globals.node,
			...globals.es2026,
		}
	},
	rules
}

const vueConfigs = [
	...vue.configs['flat/recommended'],
	{
		files: [ '**/*.vue' ],
		rules: rulesVue
	},
  {
    files: [ '**/*.vue' ],
    rules: {
      indent: 'off'
    }
  }
]

const styleConfig = {
	rules: rulesStyle
}

const flat = [ baseConfig ]
const flatWithStyle = [ baseConfig, styleConfig ]
const vueOnly = [ baseConfig, ...vueConfigs ]
const vueWithStyle = [ baseConfig, styleConfig, ...vueConfigs ]

module.exports = flat
module.exports.globals = globals
module.exports.flat = flat
module.exports.flatWithStyle = flatWithStyle
module.exports.vue = vueOnly
module.exports.vueWithStyle = vueWithStyle
