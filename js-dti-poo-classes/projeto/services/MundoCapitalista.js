"use strict";
exports.__esModule = true;
exports.MundoCapitalista = void 0;
var Trabalhador = /** @class */ (function () {
    function Trabalhador(nome, valor, dia, mes, ano) {
        this.Nome = nome;
        this.Valor = valor;
        this.Dia = dia;
        this.Mes = mes;
        this.Ano = ano;
    }
    return Trabalhador;
}());
var MundoCapitalista = /** @class */ (function () {
    function MundoCapitalista() {
        this.ListaDeTrabalhadores = new Array();
    }
    MundoCapitalista.prototype.Trabalhar = function (nomeTrabalhador, dia, mes, ano) {
        var minSalario = 1;
        var maxSalario = 100;
        var ganhoDoDia = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
        var trabalhador = new Trabalhador(nomeTrabalhador, ganhoDoDia, dia, mes, ano);
        this.ListaDeTrabalhadores.push(trabalhador);
        return ganhoDoDia;
    };
    MundoCapitalista.prototype.CalculaValorDaCompra = function () {
        var maxGastos = 50;
        var minGastos = 100;
        return Math.ceil(Math.random() * (maxGastos - minGastos) + minGastos);
    };
    return MundoCapitalista;
}());
exports.MundoCapitalista = MundoCapitalista;
// Transformar o projeto em projeto node, posso transformar direto 
// npm init ou npm package json
// utilizar o npm install ... typescript
// OLHAR KT! 
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
