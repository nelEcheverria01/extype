#!/usr/bin/env node

'use strict'

const extype = require('../lib')
const { getPkgVersion } = require('../lib/utils')
const { HELP_CMD } = require('../lib/constants')

try {
  const { filename, type, flags } = extype()
  if (filename && type) console.log(`output: ${filename} >> ${type}`)

  if (flags) {
    if (flags.help) console.log(`help: \n ${HELP_CMD}`)
    if (flags.version) console.log(`version: ${getPkgVersion()}`)
  }
} catch ({ message }) {
  console.log(`error: ${message}`)
}
