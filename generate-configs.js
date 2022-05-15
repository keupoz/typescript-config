#!/usr/bin/env node

const fs = require('fs')
const { name } = require('./package.json')

/** @param {any} obj */
function json (obj) {
  return `${JSON.stringify(obj, null, 4)}\n`
}

fs.writeFileSync('tsconfig.json', json({
  extends: `${name}/tsconfig.json`
}))
