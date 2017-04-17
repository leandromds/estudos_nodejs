'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer(function (request, response) {
  fs.readFile(path.join(__dirname, 'index.html'), function (erro, html) {
    response.writeHeader(200, {'content-type': 'text/html'})
    response.write(html)
    response.end()
  })
})

server.listen(3000, function () {
  console.log('Servidor está rodando na porta 3000')
})
