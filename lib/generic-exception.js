'use strict'

class ExtypeError extends Error {
  /**
   *
   * @param {string} message  an error message
   * @param {string} code an error code, something like this 'ERR_SOMETHING_WENT_WRONG'
   */
  constructor (message, { code }) {
    super(message)
    this.code = code
    this.name = `ExtypeError [${this.code}]`
  }
}

module.exports = ExtypeError
