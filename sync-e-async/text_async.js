'use strict'

const fs = require('fs')

for (let i = 1; i <= 5; i++) {
  const file = `text_async${i}.txt`
  fs.writeFile(file, 'Hello node.js', (err, out) => console.log(out))
}
