'use strict'

const http = require('http')
const url = require('url')

const server = http.createServer(function (request, response) {
  response.writeHeader(200, {'Content-Type': 'text/html'})
  response.write('<h1>Dados da <i>query strings</i></h1>')

  const message = 'Numero da chave: '
  const result = url.parse(request.url, true)
  console.log(result)
  for (let key in result.query) {
    response.write('<p>' + message + key + '</p>')
  }
  response.end()
})

server.listen(3000, function () {
  console.log('O servidor está rondando na porta 3000')
})
