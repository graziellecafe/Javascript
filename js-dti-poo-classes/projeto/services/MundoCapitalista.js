"use strict";
exports.__esModule = true;
exports.MundoCapitalista = void 0;
var Trabalhador = /** @class */ (function () {
    function Trabalhador(nome, valor) {
        this.Nome = nome;
        this.Valor = valor;
    }
    return Trabalhador;
}());
var MundoCapitalista = /** @class */ (function () {
    // construtor 
    function MundoCapitalista() {
        this.ListaDeTrabalhadores = new Array();
    }
    return MundoCapitalista;
}());
exports.MundoCapitalista = MundoCapitalista;
// instanciar a classe 
// const <nome_da_variavel> = new <nome_da_classe>
// class Trabalhador {
//     Nome: string; 
//     Valor: number; 
//     constructor (nome: string, valor: number){
//         this.Nome = nome; 
//         this.Valor = valor; 
//     }
// }
// export class MundoCapitalista {
//     public Trabalhar(): void {
//     }
// }
