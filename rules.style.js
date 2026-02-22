module.exports = {
    'no-inline-comments': 0,
    'no-mixed-spaces-and-tabs': [ 2, false ],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [ 2, {
      max: 1
    } ],
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'array-bracket-spacing': [ 2, 'always' ],
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'brace-style': [ 2, '1tbs' ],
    'camelcase': 2,
    'comma-dangle': [ 2, 'never' ],
    'comma-spacing': 2,
    'comma-style': [ 2, 'last' ],
    'computed-property-spacing': [ 2, 'never' ],
    'dot-location': 0,
    'eol-last': 1,
    'func-names': 0,
    'func-style': [ 0, 'declaration' ],
    'generator-star-spacing': [ 'error', { before: false, after: true } ],
    'id-length': [ 2, {
      min: 1,
      max: 30,
      exceptions: []
    } ],
    'id-match': 0,
    'indent': [ 2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1
    } ],
    'key-spacing': [ 2, {
      beforeColon: false,
      afterColon: true
    } ],
    'keyword-spacing': 2,
    'linebreak-style': [ 0, 'unix' ],
    'lines-around-comment': [ 2, {
      beforeBlockComment: true,
      beforeLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      afterBlockComment: true,
      afterLineComment: false
    } ],
    'max-len': [ 0, 80, 4 ],
    'new-parens': 2,
    'newline-after-var': 1,
    'newline-before-return': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'one-var': 0,
    'operator-assignment': [ 0, 'always' ],
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'quote-props': [ 2, 'consistent-as-needed' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'never' ],
    'semi-spacing': [ 2, {
      before: false,
      after: true
    } ],
    'sort-vars': 0,
    'space-before-blocks': [ 2, 'always' ],
    'space-before-function-paren': [ 2, {
      anonymous: 'always',
      named: 'never'
    } ],
    'space-in-parens': [ 2, 'never' ],
    'space-infix-ops': 2,
    'space-unary-ops': [ 2, {
      words: true,
      nonwords: false
    } ],
    'spaced-comment': [ 'error', 'always', {
      line: {
        markers: [ '/' ],
        exceptions: [ '-', '+' ]
      },
      block: {
        markers: [ '!' ],
        exceptions: [ '*' ],
        balanced: true
      }
    } ],
    'wrap-iife': 0,
    'yoda': [ 2, 'never' ]
  }