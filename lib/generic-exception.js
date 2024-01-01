class ExtypeError extends Error {
  /**
     *
     * @param {string} code a specific error code, such as 'ERR_SOMETHING_WENT_WRONG'
     * @param {string} message error message
     */
  constructor (code, message) {
    super(message)
    this.code = code
    this.name = `ExtypeError [${this.code}]`
  }
}

module.exports = ExtypeError
