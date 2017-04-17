'use strict'

const fs = require('fs')

for (let i = 1; i <= 5; i++) {
  const file = `text_sync${i}.txt`
  const out = fs.writeFileSync(file, 'Hello node.js')
  console.log(out)
}
