class Person {
    constructor(name) {
        this.name = name;
    }

    digaNome(){
        return `My name is ${this.name}!, and welcome!`;
    }

}

module.exports = {
    Person,
};

/**
 * Criação de arquivo para exportar
 */
