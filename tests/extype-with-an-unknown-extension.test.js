'use strict'

const test = require('ava')
const extype = require('../lib')
const ExtypeError = require('../lib/generic-exception')

test.before(_ => {
  process.argv[2] = 'content.some_ext'
})

test('when an unknown extension is passed, it should throw an error with a code \'ERR_UNKNOW_EXTENSION\'', t => {
  const err = t.throws(_ => extype())

  t.assert(err instanceof ExtypeError)
  t.is(err.code, 'ERR_UNKNOW_EXTENSION')
})
