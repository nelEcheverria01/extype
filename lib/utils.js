'use strict'

const { extname } = require('node:path')
const ExtypeError = require('./generic-exception')

exports.getFileFromArgs = _ => {
  const filename = process.argv[2]
  if (!filename) throw new ExtypeError('ERR_FILE_NOT_PROVIDED', 'file cannot be null or undefined')

  const ext = extname(filename)
  if (!ext) throw new ExtypeError('ERR_WITHOUT_EXTENSION', `the '${filename}' file does not have an extension to evaluate`)

  return { filename, ext }
}
