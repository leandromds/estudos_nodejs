'use strict'

const fs = require('fs')

fs.readdir(__dirname, (erro, contents) => {
  if (erro) { throw erro }
  contents.forEach((content) => {
    const path = `./${content}`
    fs.stat(path, (erro, stat) => {
      if (erro) { throw erro }
      if (stat.isFile()) {
        console.log(`%s %d, ${content}, ${stat.size}`)
      }
    })
  })
})
