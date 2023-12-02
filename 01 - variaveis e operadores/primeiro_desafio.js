/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:

1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem; */

const valorCombustivel = 5.79; // etanol
const kmLitros = 12;
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmLitros;
const valorGasto = litrosConsumidos * valorCombustivel;

console.log(valorGasto.toFixed(2));

// console.log(Math.trunc(valorGasto)); //usando o math