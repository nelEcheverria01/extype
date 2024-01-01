'use strict'

const test = require('ava')
const { getPkgVersion } = require('../../lib/utils')

test.todo('the version may change and this test may be discarded in the future')

test('should return a version from package.json', t => {
  const version = getPkgVersion()
  const expected = '1.0.0'

  t.is(version, expected)
})
