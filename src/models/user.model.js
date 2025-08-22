const mongoose = require('mongoose')

//Criação das informações que serão salvas no banco de dados.
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    }
});


const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
