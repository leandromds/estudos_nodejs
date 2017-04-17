'use strict'

const http = require('http')
const server = http.createServer(function (request, response) {
  response.writeHeader(200, {'content-type': 'text/html'})

  if (request.url === '/') {
    response.write('<h1>Pagina principal</h1>')
  } else if (request.url === '/bemvindo') {
    response.write('<h1>Bem-vindo :D</h1>')
  } else {
    response.write('<h1>Página não encontrada! :(</h1>')
  }
  response.end()
})

server.listen(3000, function () {
  console.log('Servidor rodando na porta 3000!')
})
