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

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteio = gets();
    if (numeroSorteio > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteio;
    }
}

print(maiorValorEncontrado);