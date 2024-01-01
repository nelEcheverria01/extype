#!/usr/bin/env node

'use strict'

const extype = require('../lib')

try {
  /* eslint-disable camelcase */
  const { filename, type, flags_value } = extype()
  if (filename && type) console.log(`output: ${filename} >> ${type}`)

  if (flags_value.help) console.log(`help: ${flags_value.help}`)
  if (flags_value.version) console.log(`version: ${flags_value.version}`)
} catch ({ message }) {
  console.log(`error: ${message}`)
}
