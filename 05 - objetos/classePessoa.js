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

function compararPessoas(p1, p2) {
    if (p1.id < p2.id) {
        console.log(`${p1.nome} tem o registro de cadastro inicial na fila que ${p2.nome}`);
    } else if (p2.id < p1.id) {
        console.log(`${p2.nome} tem o registro de cadastro inicial na fila que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma posição de cadastro na fila de registro`);
    } 
}

const cristina = new Pessoa('Cristina', 0);
const fulano = new Pessoa('Fulano', 1);

compararPessoas(cristina, fulano);

/* console.log(cristina);
console.log(fulano); */

/* cristina.descrever();
fulano.descrever(); */