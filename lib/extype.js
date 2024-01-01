'use strict'

/* eslint-disable camelcase */

const extensions = require('./extensions')
const ExtypeError = require('./generic-exception')
const { getCommandLineArgs, getPkgVersion, objectExists } = require('./utils')
const { messages, error_codes, HELP_CMD } = require('./constants')

/**
 * @returns {object}
 * @property {object<string>} result the result, file name and type
 * @property {object<string>} flags_value the response value of the flags/options
 * @example
 * {
 *   result: {},
 *   flags_value: {
 *     version: '1.0.0'
 *   }
 * }
 */
module.exports = _ => {
  try {
    const { info_file, flags } = getCommandLineArgs()
    const result = { result: {}, flags_value: {} }

    if (objectExists(flags)) {
      const { help, version } = flags

      if (help) return { ...result, flags_value: { help: HELP_CMD } }
      if (version) return { ...result, flags_value: { version: getPkgVersion() } }
    }

    if (objectExists(info_file)) {
      const { filename, ext } = info_file
      const _result = extensions.find(({ ext_regex }) => ext_regex.test(ext))

      if (!_result) throw new ExtypeError(messages.UNKNOWN_FILE_EXTENSION, { code: error_codes.UNKNOWN_FILE_EXTENSION })

      return { ...result, result: { filename, type: _result.type } }
    }
  } catch (err) {
    if (err.code === 'ERR_PARSE_ARGS_UNKNOWN_OPTION') throw new ExtypeError(messages.UNSUPPORTED_OPTION, { code: error_codes.UNSUPPORTED_OPTION })
    throw err
  }
}
