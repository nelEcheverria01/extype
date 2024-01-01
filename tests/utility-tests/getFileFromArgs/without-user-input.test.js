'use strict'

const test = require('ava')
const { getFileFromArgs } = require('../../../lib/utils')
const ExtypeError = require('../../../lib/generic-exception')

test.before(_ => {
  process.argv[2] = ''
})

test('when a file is not passed from the command line, it should thunder with a code \'ERR_FILE_NOT_PROVIDED\'', t => {
  const err = t.throws(_ => getFileFromArgs())

  t.assert(err instanceof ExtypeError)
  t.is(err.code, 'ERR_FILE_NOT_PROVIDED')
})
