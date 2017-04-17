'use strict'

const http = require('http')
const fs = require('fs')
const leituraAsync = require('./leitura_async')
const leituraSync = require('./leitura_sync')
const arquivo = 'speedtest.zip'
const stream = fs.createWriteStream(arquivo)
const download = 'http://srv80.main-hosting.eu/speedtest.zip'

http.get(download, (res) => {
  console.log('Fazendo download do pacote node.js!')
  res.on('data', (data) => {
    stream.write(data)
  })
  res.on('end', () => {
    stream.end()
    console.log('Download finalizado!')
    leituraAsync(arquivo)
    leituraSync(arquivo)
  })
})
