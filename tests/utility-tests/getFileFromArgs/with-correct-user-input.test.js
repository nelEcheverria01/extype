'use strict'

const test = require('ava')
const { getFileFromArgs } = require('../../../lib/utils')

const sampleFile = 'index.js'
const expected = { filename: sampleFile, ext: '.js' }

test.before(_ => {
  process.argv[2] = sampleFile
})

test('should return an object with the filename and ext (extension) properties', t => {
  const { filename, ext } = getFileFromArgs()

  t.is(filename, expected.filename)
  t.is(ext, expected.ext)
})
