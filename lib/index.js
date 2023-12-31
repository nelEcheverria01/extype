'use strict'

const { extname } = require('node:path')
const extensions = require('./extensions')

function getFileFromArgs (_filename) {
  const filename = process.argv[2] || _filename

  if (!filename) {
    throw new Error('a file was not provided')
  }

  return { filename, ext: extname(filename) }
}
/* eslint-disable camelcase */
// extensions.forEach(({ ext_regex, type }) => {
//   if (ext_regex.test(ext)) {
//     console.log(filename, type)
//   }
// })
