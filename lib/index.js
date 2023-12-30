'use strict'

const { parseArgs } = require('node:util')
const { extname } = require('node:path')

const { positionals } = parseArgs({ args: [process.argv[2] ?? 'sample.js'], allowPositionals: true })

const filename = positionals[0]
const ext = extname(filename)

if (!filename) {
  throw new Error('a file was not provided')
}

const extensions = [
  {
    ext_regex: /\.js/i,
    type: 'javascript'
  }
]

/* eslint-disable camelcase */
extensions.forEach(({ ext_regex, type }) => {
  if (ext_regex.test(ext)) {
    console.log(filename, type)
  }
})
