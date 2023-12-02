const pessoa = {
    nome: 'Cristina',
    sobrenome: 'Dias',

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e meu sobrenome é ${this.sobrenome}`);
    }
};

// pessoa.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();

// console.log(pessoa['sobrenome']);

pessoa['sobrenome'] = 'teste';

console.log(pessoa['sobrenome']);