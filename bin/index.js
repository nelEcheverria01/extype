#!/usr/bin/env node

'use strict'

/**
 * Extype is a command line tool that provides the file
 * type, which was supplied from the command line
 *
 * @auhtor Nelson Echeverria
 */
const extype = require('../lib')

try {
  const { filename, type } = extype()
  console.log('file:', filename, 'type', type)
} catch ({ message }) {
  console.log('error:', message)
}
