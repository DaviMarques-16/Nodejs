const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()
app.use(express.json())


app.set('view engine', 'ejs')
app.set('views', 'src/views');

//Middleware - interceptador de requisições
//Funções executadas antes das requisições.
app.use((req, res, next) => {

    console.log(`Request Type: ${req.method}`)
    console.log(`Content Type: ${req.headers['content-type']}`)
    console.log(`Date: ${new Date()}`)


    next()
})

//Colocar HTML dinâmico no navegador
app.get('/views/users', async (req, res) => {

    const users = await UserModel.find({});
    res.render('index', { users })
})


/**
 * app.get('/home', (req, res) => {
    res.setHeader("content-type", "text/html")
    res.status(200).send("<h1>Hello World</h1>");
})
*/

//Encontrar usuários do banco filtrado ou não.
app.get('/users', async (req, res) => {
     try {
        const users = await UserModel.find({});
        res.status(200).json(users)

     } catch (error) {
        return res.status(500).send(error.message)
     }

})

//buscar usuário por ID no banco
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id)

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


//Criar Usuários: estrutura no user.model.js e conexão no connect.js
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user)

    } catch (error) {
        res.status(500).send(error.message);
    }
})

//Atualizar Usuários
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id

        const users = await UserModel.findByIdAndUpdate(id, req.body, { new: true})
        //new: true -> retorna o registro atualizado.

        return res.status(200).json(users);

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Deletar Usuários
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id

        const user = await UserModel.findByIdAndDelete(id); 
        
        if (!user) {
            return res.status(404).send("Usuário não foi encontrado")
        }

        res.status(200).json(user);

    } catch (error) {
        res.status(500).send(error.message)
    }
})

const port = 8080
app.listen(port, () => console.log(`Rodando com express na porta ${port}`))
