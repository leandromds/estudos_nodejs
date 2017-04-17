'use strict'

const fs = require('fs')

const lerDiretorio = () => {
  fs.readdir(__dirname, (erro, diretorio) => {
    if (erro) { throw erro }
    diretorio.forEach((arquivo) => {
      lerArquivo(arquivo)
    })
  })
}

const lerArquivo = (arquivo) => {
  const path = `./${arquivo}`
  fs.stat(path, (erro, stat) => {
    if (erro) { throw erro }
    if (stat.isFile()) {
      console.log(`%s %d bytes ${arquivo}, ${stat.size}`)
    }
  })
}

lerDiretorio()
