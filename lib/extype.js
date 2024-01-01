'use strict'

const extensions = require('./extensions')
const ExtypeError = require('./generic-exception')
const { getCommandLineArgs } = require('./utils')
const { MSG_UNKNOWN_EXTENSION, MSG_UNSUPPORTED_OPTION } = require('./constants')

module.exports = _ => {
  try {
    /* eslint-disable camelcase */
    const { info_files, flags } = getCommandLineArgs()

    if (Object.keys(info_files).length) {
      const result = extensions.find(({ ext_regex }) => ext_regex.test(info_files.ext))
      if (!result) throw new ExtypeError(MSG_UNKNOWN_EXTENSION)

      return { filename: info_files.filename, type: result.type }
    }

    return { flags }
  } catch (err) {
    if (err.code === 'ERR_PARSE_ARGS_UNKNOWN_OPTION') throw new ExtypeError(MSG_UNSUPPORTED_OPTION)
    throw err
  }
}
