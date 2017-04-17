'use strict'

const http = require('http')

const server = http.createServer(function (request, response) {
  response.writeHead(200, {'content-Type': 'text/html'})
  response.write('<h1>Hello World</h1>')
  response.end()
})

server.listen(3000, function () {
  console.log('O servidor está executando na porta 3000!')
})
