'use strict'

const { extname } = require('node:path')
const { parseArgs } = require('node:util')
const ExtypeError = require('./generic-exception')

/* eslint-disable camelcase */
const { messages, error_codes } = require('./constants')

/**
 * this function gets the arguments from the command line
 *
 * when arguments are passed, the first argument is always taken
 *
 * cmd: extype sample.ts --help
 *
 * --help will be ignored
 * @returns {object}
 * @example
 * it will look something like this
 * {
 *   info_file: {
 *     filname: 'sample.ts',
 *     ext: '.ts'
 *   },
 *   flags: {}
 * }
 */
exports.getCommandLineArgs = _ => {
  const opts = {
    allowPositionals: true,
    options: {
      help: {
        type: 'boolean',
        short: 'h'
      },
      version: {
        type: 'boolean',
        short: 'v'
      }
    }
  }

  const { positionals, values } = parseArgs(opts)
  const result = { info_file: {}, flags: {} }

  if (process.argv[2] === positionals[0]) {
    const filename = process.argv[2]
    if (!filename) throw new ExtypeError(messages.FILE_NOT_PROVIDED, { code: error_codes.FILE_NOT_PROVIDED })

    const ext = extname(filename)
    if (!ext) throw new ExtypeError(messages.FILE_WITHOUT_EXTENSION, { code: error_codes.FILE_WITHOUT_EXTENSION })

    /* eslint-disable camelcase */
    const info_file = { filename, ext }
    return { ...result, info_file }
  }

  const flags = { ...values }
  return { ...result, flags }
}

/**
 * this function return the
 * version, from package.json
 * @returns {string} version
 * @example '1.2.0'
 */
exports.getPkgVersion = _ => require('../package.json').version

/**
 * this function evaluates if the provided object
 * has properties and consequently if it exists
 * @param {object} obj object to evaluate
 * @returns {boolean}
 */
exports.objectExists = obj => !!Object.keys(obj).length
