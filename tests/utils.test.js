const test = require('ava')
const { getFileFromArgs } = require('../lib/utils')

test.before(t => {
  t.context.sample_file = { filename: 'index.js', ext: '.js' }
  process.argv[2] = t.context.sample_file.filename
})

test('should return an object with the filename and ext (extension) properties', t => {
  const { filename, ext } = getFileFromArgs()

  /* eslint-disable camelcase */
  const { sample_file } = t.context

  t.is(filename, sample_file.filename)
  t.is(ext, sample_file.ext)
})
