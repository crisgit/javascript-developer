/* 2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
 */

class PessoaImc {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if(imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25.0) {
            return ('Peso normal');
        } else if (imc >= 25.0 && imc < 30.0) {
            return ('Acima do peso');
        } else if (imc >= 30.0 && imc < 40.0) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const jose = new PessoaImc('Jose', 70, 1.75);
console.log(jose.classificarImc());

const fulano = new PessoaImc('Fulano', 100, 1.75);
console.log(fulano.classificarImc()); // um exemplo de pessoa