'use strict'

module.exports = {
  messages: {
    FILE_NOT_PROVIDED: 'missing arguments, no file provided',
    FILE_WITHOUT_EXTENSION: 'the provided file does not have an extension to evaluate',
    UNSUPPORTED_OPTION: 'unsupported option, try --help to see supported options',
    UNKNOWN_FILE_EXTENSION: 'the extension of the file provided is unknown, P.S: may not be supported'
  },
  error_codes: {
    FILE_NOT_PROVIDED: 'ERR_FILE_NOT_PROVIDED',
    FILE_WITHOUT_EXTENSION: 'ERR_FILE_WITHOUT_EXTENSION',
    UNSUPPORTED_OPTION: 'ERR_UNSUPPORTED_EXTENSION',
    UNKNOWN_FILE_EXTENSION: 'ERR_UNKNOWN_FILE_EXTENSION'
  },
  HELP_CMD:
    `
    * usage:
      extype <filename>        file to evaluate/process

    * options:
      --help, short: -h        shows command line options 
      --version, short: -v     returns the current version of the package    
    
    `
}
