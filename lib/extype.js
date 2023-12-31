'use strict'

const { getFileFromArgs } = require('./utils')
const extensions = require('./extensions')

module.exports = _ => {
  const { filename, ext } = getFileFromArgs()

  /* eslint-disable camelcase */
  const result = extensions.find(({ ext_regex }) => ext_regex.test(ext))
  if (!result) throw new Error('unknow or unsupported extension')

  return { filename, type: result.type }
}
