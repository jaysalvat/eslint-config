
/* eslint-env node */

const legacyConfig = require('./.eslintrc.js')
const stylistic = require('@stylistic/eslint-plugin')
const { builtinRules } = require('eslint/use-at-your-own-risk')

const replacementRules = {
	'no-native-reassign': 'no-global-assign',
	'no-new-object': 'no-object-constructor',
	'no-spaced-func': '@stylistic/function-call-spacing'
}

const rules = Object.entries(legacyConfig.rules).reduce((acc, [ name, value ]) => {
	const rule = builtinRules.get(name)

	if (!rule || !rule.meta || !rule.meta.deprecated) {
		acc[name] = value
		return acc
	}

	if (stylistic.rules[name]) {
		acc[`@stylistic/${name}`] = value
		return acc
	}

	if (replacementRules[name]) {
		acc[replacementRules[name]] = value
	}

	return acc
}, {})

module.exports = [
	{
		languageOptions: {
			ecmaVersion: legacyConfig.parserOptions.ecmaVersion,
			sourceType: 'script'
		},
		plugins: {
			'@stylistic': stylistic
		},
		rules
	}
]

module.exports.legacy = legacyConfig
