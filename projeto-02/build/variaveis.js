"use strict";
/**
 * variaveis
 */
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Fiat";
let id = 1;
let altura = 1.9;
// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "palio",
    cidade: "rj",
    id: 1,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
/**
 * arrays
 */
let dados = ["palio", "uno", "gol"];
let dados2 = ["moto", "bicicleta", "patinete"];
// Arrays de multi types
let infos = [1, "gol"];
/**
 * Tuplas
 */
let boleto = ["agua conta", 199.9, 32342342];
/**
 * arrays métodos (são os mesmos do Javascript)
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
