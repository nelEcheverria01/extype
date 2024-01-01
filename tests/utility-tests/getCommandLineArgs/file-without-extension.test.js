'use strict'

const test = require('ava')
const { getCommandLineArgs } = require('../../../lib/utils')
const ExtypeError = require('../../../lib/generic-exception')

/* eslint-disable camelcase */
const { error_codes } = require('../../../lib/constants')

test.before(_ => {
  process.argv[2] = 'blablabla'
})

test('should fail if the provided file does not have an extension', t => {
  const err = t.throws(_ => getCommandLineArgs())

  t.assert(err instanceof ExtypeError)
  t.is(err.code, error_codes.FILE_WITHOUT_EXTENSION)
})
