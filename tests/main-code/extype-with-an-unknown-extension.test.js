'use strict'

const test = require('ava')
const extype = require('../../lib')
const ExtypeError = require('../../lib/generic-exception')

/* eslint-disable camelcase */
const { error_codes } = require('../../lib/constants')

test.before(_ => {
  process.argv[2] = 'content.some_ext'
})

test(`when it does not recognize the file extension, it should
      throw an error with a 'ERR_UNKNOWN_FILE_EXTENSION' code`, t => {
  const err = t.throws(_ => extype())

  t.assert(err instanceof ExtypeError)
  t.is(err.code, error_codes.UNKNOWN_FILE_EXTENSION)
})
