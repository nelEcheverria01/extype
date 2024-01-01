'use strict'

const test = require('ava')
const extype = require('../../lib')
const { getPkgVersion } = require('../../lib/utils')

const expected = getPkgVersion()

test.before(_t => {
  process.argv[2] = '--version'
})

test(`When the version flag is present, the flags_value.version property
      should be equal to the version property of the package.json`, t => {
  /* eslint-disable camelcase */
  const { flags_value } = extype()
  t.is(flags_value.version, expected)
})
