/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM de viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

 */
const valorEtanol = 5.79; 
const valorGasolina = 6.66;

const kmLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKm / kmLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * valorEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * valorGasolina;
    console.log(valorGasto.toFixed(2));

}



