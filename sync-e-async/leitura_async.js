'use strict'

const fs = require('fs')

const leituraAsync = (arquivo) => {
  console.log('Fazendo a leitura dos arquivos assíncrona')
  const inicio = new Date().getTime()
  fs.readFile(arquivo, (err, out) => console.log('fim da leitura assíncrona'))
  const fim = new Date().getTime()
  console.log(`Bloqueio assíncrono: ${fim - inicio} ms`)
}

module.exports = leituraAsync
