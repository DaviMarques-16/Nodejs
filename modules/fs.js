const fs = require('fs')
const path = require('path')

/** Criar uma pasta!
__dirname: diretório atual
, '/test' adiciona o novo arquivo
 */

fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
    return console.log("Erro: ", error)
    }

    console.log("Pasta criada com sucesso")
})


// Criar um arquivo!

fs.writeFile(path.join(__dirname, '/test', 'teste.txt'), 'Hello Node!', (error) => {
    if (error) {
        return console.log("Erro: ", error)
    }

    console.log('Arquivo criado com sucessso.')


    // Adicionar em um arquivo já existente.

    fs.appendFile(path.join(__dirname, '/test', 'teste.txt'), 
    "Adicionando mais palavras ao arquivo"
    , (error) => {
        if (error) {
            return console.log("Erro: ", error)
        }

        console.log("Arquivo modificado com sucesso!")
    });

        //Ler arquivo
        fs.readFile(path.join(__dirname, '/test', 'teste.txt'), 'utf-8', (error, data) => {
        if (error) {
            return console.log("Erro: ", error)
        }

        console.log(data)
    });
    
}
);


//O writeFile, por padrão, substitui o conteúdo do arquivo se criado em seguida.
// Ler arquivos: fs.readFile