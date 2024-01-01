'use strict'

const test = require('ava')
const { objectExists } = require('../../lib/utils')

test('when passed an empty object, it should return false and vice versa', t => {
  t.false(objectExists({}))
  t.true(objectExists({ foo: 'bar' }))
})
