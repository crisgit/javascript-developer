function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if(imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25.0) {
        return 'Peso normal';
    } else if (imc >= 25.0 && imc < 30.0) {
        return 'Acima do peso';
    } else if (imc >= 30.0 && imc < 40.0) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }    
}

// Main
// funcao anônima pq nao tem nome declarado
(function () { 
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    // console.log(imc);
    console.log(classificarImc(imc));
})(); //função invocadas imediatamente

