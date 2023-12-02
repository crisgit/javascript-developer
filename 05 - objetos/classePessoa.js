class Pessoa {
    nome;
    id;
    registroContadorId;

    // acontece quando uma pessoa é instanciada
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
        this.registroContadorId = id - 1;
    }
    descrever () {
        console.log(`Meu nome é ${this.nome} e meu id é ${this.id}`);
    }
};

const cristina = new Pessoa('Cristina', 1);
const fulano = new Pessoa('Fulano', 2);

console.log(cristina);
console.log(fulano);

/* cristina.descrever();
fulano.descrever(); */