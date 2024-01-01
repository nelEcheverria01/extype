'use strict'

const test = require('ava')
const extype = require('../../lib')

const sampleFile = 'main.css'
const expected = { filename: sampleFile, type: 'CSS' }

test.before(_ => {
  process.argv[2] = sampleFile
})

test('the type property, returned by extype(), must be equal to \'CSS\'; trying main.css', t => {
  const { result } = extype()

  t.is(result.filename, expected.filename)
  t.is(result.type, expected.type)
})
