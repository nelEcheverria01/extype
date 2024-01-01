'use strict'

const test = require('ava')
const { getFileFromArgs } = require('../../../lib/utils')
const ExtypeError = require('../../../lib/generic-exception')

test.before(_t => {
  process.argv[2] = 'blablabla'
})

test('should fail if the provided file does not have an extension', t => {
  const err = t.throws(_ => getFileFromArgs())

  t.assert(err instanceof ExtypeError)
  t.is(err.code, 'ERR_WITHOUT_EXTENSION')
})
