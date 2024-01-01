#!/usr/bin/env node

'use strict'

const extype = require('../lib')

try {
  /* eslint-disable camelcase */
  const { result, flags_value } = extype()

  // result
  if (result.filename && result.type) console.log(`result: ${result.filename} >> ${result.type}`)

  // flags
  if (flags_value.help) console.log(`help: ${flags_value.help}`)
  if (flags_value.version) console.log(`version: ${flags_value.version}`)
} catch ({ message }) {
  console.log(`error: ${message}`)
}
