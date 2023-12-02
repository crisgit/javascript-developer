class Pessoa {
    // classe é a definição deste objeto dentro de Pessoan
    nome;
    id;

    descrever () {
        console.log(`Meu nome é ${this.nome} e meu id é ${this.id}`);
    }
};

// instância é a ocorrência deste resultado abaixo:
const cristina = new Pessoa();
cristina.nome = 'Cristina Dias';
cristina.id = 1;

const fulano = new Pessoa();
fulano.nome = 'Fulano de Tal';
fulano.id = 2;

// console.log(cristina);
// console.log(fulano);

cristina.descrever();
fulano.descrever();