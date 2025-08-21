const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'}) //requisição ok/renderizar html
        res.end('<h1>Home page</h1>');
    }

    if (req.url === '/users') {
        const users = [
        {
            name: 'John Blue',
            email: 'John@doe.com',
        },
        {
            name: 'Jane Doe',
            email: 'Jane$doe.com'
        }
        ]

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users)) //trasnforma json em um objeto preparado p/ navegador
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`))