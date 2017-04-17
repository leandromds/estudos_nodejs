'use strict'

const path = require('path')
const http = require('http')
const url = require('url')
const fs = require('fs')

const diretorio = (arquivo) => path.join(__dirname, arquivo)

const roteamento = (pathname) => {
  if (pathname && pathname !== '/') {
    const arquivo = diretorio(`${pathname}.html`)
    const validacaoDoArquivo = fs.existsSync(arquivo)
    if (validacaoDoArquivo) {
      return arquivo
    }
    return diretorio('erro.html')
  }
  return diretorio('artigos.html')
}

const server = http.createServer((request, response) => {
  const pathname = url.parse(request.url).pathname

  const pagina = roteamento(pathname)

  fs.readFile(pagina, (erro, html) => {
    response.writeHeader(200, {'content-type': 'text/html'})
    response.end(html)
  })
})

server.listen(3000, () => {
  console.log('Servidor Rodando na porta: 3000')
})
