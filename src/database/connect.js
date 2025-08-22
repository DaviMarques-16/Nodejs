const mongoose = require('mongoose')

const connectToDataBase = async () => {
    try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.icbto3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('conectado!');
    } catch (error) {
        console.error('erro', error)
    }
    }

module.exports = connectToDataBase;