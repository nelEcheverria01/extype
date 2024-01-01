'use strict'

const { getFileFromArgs } = require('./utils')
const extensions = require('./extensions')
const ExtypeError = require('./generic-exception')

module.exports = _ => {
  const { filename, ext } = getFileFromArgs()

  /* eslint-disable camelcase */
  const result = extensions.find(({ ext_regex }) => ext_regex.test(ext))
  if (!result) throw new ExtypeError('ERR_UNKNOW_EXTENSION', `the '${ext}' extension is unknown, P.S: may not be supported`)

  return { filename, type: result.type }
}
