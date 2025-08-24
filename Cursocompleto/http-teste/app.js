var http = require("http")

http.createServer(function (req, res){
    res.end("Hello World!");
}).listen(8081);

//Dessa forma, precisa parar o servidor para ele atualizar

console.log('Servidor rodando na porta 8081');