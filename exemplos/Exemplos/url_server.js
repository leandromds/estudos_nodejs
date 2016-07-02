var http = require ('http');
var url  = require ('url'); 

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1>Dados da query string</h1>");
	var result = url.parse (request.url, true);
	console.log(result);
	for (var key in result.query){
		response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	}
		response.write("<h2>tem que imprimir os resutados</h2>");
	response.end();
});

server.listen(3000, function(){
	console.log("Servidor rodando");
});