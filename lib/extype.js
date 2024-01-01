'use strict'

/* eslint-disable camelcase */

const extensions = require('./extensions')
const ExtypeError = require('./generic-exception')
const { getCommandLineArgs } = require('./utils')
const { messages, error_codes } = require('./constants')

module.exports = _ => {
  try {
    const { info_file, flags } = getCommandLineArgs()

    if (Object.keys(info_file).length) {
      const result = extensions.find(({ ext_regex }) => ext_regex.test(info_file.ext))
      if (!result) throw new ExtypeError(messages.UNKNOWN_FILE_EXTENSION, { code: error_codes.UNKNOWN_FILE_EXTENSION })

      return { filename: info_file.filename, type: result.type }
    }

    return { flags }
  } catch (err) {
    if (err.code === 'ERR_PARSE_ARGS_UNKNOWN_OPTION') throw new ExtypeError(messages.UNSUPPORTED_OPTION, { code: error_codes.UNSUPPORTED_OPTION })
    throw err
  }
}
