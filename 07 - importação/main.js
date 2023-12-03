const { gets, print } = require('./funcoes_auxiliares');

/* 
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100. 
Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída: 
98
*/

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteio = gets();
    numerosSorteados.push(numeroSorteio);
}

// print(numeroSorteados);

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteio = numerosSorteados[i];
    if (numeroSorteio > maiorValor) {
        maiorValor = numeroSorteio;
    }
}

print(maiorValor);