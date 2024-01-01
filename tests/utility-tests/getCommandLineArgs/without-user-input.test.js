'use strict'

const test = require('ava')
const { getCommandLineArgs } = require('../../../lib/utils')
const ExtypeError = require('../../../lib/generic-exception')

/* eslint-disable camelcase */
const { error_codes } = require('../../../lib/constants')

test.before(_ => {
  process.argv[2] = ''
})

test('when a file is not passed from the command line, it should thunder with a code \'ERR_FILE_NOT_PROVIDED\'', t => {
  const err = t.throws(_ => getCommandLineArgs())

  t.assert(err instanceof ExtypeError)
  t.is(err.code, error_codes.FILE_NOT_PROVIDED)
})
