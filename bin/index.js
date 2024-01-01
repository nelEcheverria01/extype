#!/usr/bin/env node

'use strict'

/**
 * Extype is a command line tool that provides the file
 * type, which was supplied from the command line
 *
 * @auhtor Nelson Echeverria
 */
const extype = require('../lib')
const prefix = '[extype]'

try {
  const { filename, type } = extype()
  console.log(prefix, 'file:', filename, 'type:', type)
} catch ({ message }) {
  console.log(prefix, 'error:', message)
}
