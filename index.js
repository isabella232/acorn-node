var acorn = require('acorn')
var xtend = require('xtend')

function mapOptions (opts) {
  if (!opts) opts = {}
  opts = xtend({ ecmaVersion: 9 }, opts)
  opts.plugins = xtend(opts.plugins, {
    objectSpread: true
  })
  return opts
}

module.exports = exports = xtend(acorn, {
  parse: function parse (src, opts) {
    return acorn.parse(src, mapOptions(opts))
  },
  parseExpressionAt: function parseExpressionAt (src, offset, opts) {
    return acorn.parseExpressionAt(src, offset, mapOptions(opts))
  },
  tokenizer: function tokenizer (src, opts) {
    return acorn.tokenizer(src, mapOptions(opts))
  }
})

require('./lib/object-spread')(exports)