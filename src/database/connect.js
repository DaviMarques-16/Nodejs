const mongoose = require('mongoose')

const connectToDataBase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:22558800w@cluster0.icbto3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('conectado com sucesso ao banco de dados.');
    } catch (error) {
        console.error('erro', error)
    }
}

module.exports = connectToDataBase;