'use strict'

const { extname } = require('node:path')

exports.getFileFromArgs = _ => {
  const filename = process.argv[2]
  if (!filename) throw new Error('a file was not provided')

  const ext = extname(filename)
  if (!ext) throw new Error('the file provided no have a extension') // TODO: change error message

  return { filename, ext }
}
