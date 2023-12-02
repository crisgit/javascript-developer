// Escreva uma função do seu nome
function escrevaNome(nome) {
    return 'Meu nome é ' + nome;
}

// console.log(escrevaNome('Cristina'));


// Escreva uma função de classificação de idade
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome('Cristina ') + 'é Maior'); //chamando a função dentro de outra função
    } else {
        console.log('Menor');
    }
}

verificarIdade(18);