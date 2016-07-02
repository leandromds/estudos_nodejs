var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	var rota = url.parse(request.url, true);
	console.log(rota.pathname);
	
	if (rota.pathname == "/" || rota.pathname == "/artigos.html" || rota.pathname == "/artigos") {
	    fs.readFile(__dirname + '/artigos.html',function(erro, html){
	      response.writeHeader(200, {'Content-Type':'text/html'});
	      response.write(html); 
	      response.end();    
	    });
	    console.log('artigos');
	} else if(rota.pathname == "/contato.html" || rota.pathname == "/contato") {
		fs.readFile(__dirname + '/contato.html',function(erro, html){
			response.writeHeader(200, {'Content-Type':'text/html'});
			response.write(html);
			response.end();
		});
	    console.log('contato');
	} else {
		fs.readFile(__dirname + '/erro.html',function(erro, html){
			response.writeHeader(200, {'Content-Type':'text/html'});
			response.write(html);
			response.end();
		});
	    console.log('Erro');
	}
});

server.listen(3000, function(){
	console.log("Servidor rodando!");
});