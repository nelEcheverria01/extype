'use strict'

class ExtypeError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ExtypeError'
  }
}

module.exports = ExtypeError
