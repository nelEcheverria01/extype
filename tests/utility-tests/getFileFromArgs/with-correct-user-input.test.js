'use strict'

const test = require('ava')
const { getFileFromArgs } = require('../../../lib/utils')

/** sample input/file for testing */
const sample = { filename: 'index.js', ext: '.js' }

test.before(t => {
  process.argv[2] = sample.filename
})

test('should return an object with the filename and ext (extension) properties', t => {
  const { filename, ext } = getFileFromArgs()

  t.is(filename, sample.filename)
  t.is(ext, sample.ext)
})
