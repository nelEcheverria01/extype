'use strict'

const test = require('ava')
const extype = require('../lib')

const sampleFile = 'main.css'
const expected = { filename: sampleFile, type: 'CSS' }

test.before(_ => {
  process.argv[2] = sampleFile
})

test('the type property, returned by extype(), must be equal to \'CSS\'; trying main.css', t => {
  const { filename, type } = extype()

  t.is(filename, expected.filename)
  t.is(type, expected.type)
})
