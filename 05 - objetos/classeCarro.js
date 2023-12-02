/* 1 - Crie uma classe para representar carros;
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado. 
Crie um método que dado a quantidade de quilômetros e o preço do combustível 
nos dê o valor gasto em reais para realizar este percurso. 
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    // em orientacao a objetos, se for obrigatorio, entao passa pelo constructor
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca; 
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);

console.log(uno);