'use strict'

module.exports = {
  MSG_FILE_NOT_PROVIDED: 'missing arguments, no file provided',
  MSG_FILE_WITHOUT_EXTENSION: 'the provided file does not have an extension to evaluate',
  MSG_UNSUPPORTED_OPTION: 'unsupported option, try --help to see supported options',
  MSG_UNKNOWN_EXTENSION: 'the extension of the file provided is unknown, P.S: may not be supported',
  HELP_CMD:
    `
    * usage:
      extype <filename>        file to evaluate/process

    * options:
      --help, short: -h        shows command line options 
      --version, short: -v     returns the current version of the package    
    
    `
}
