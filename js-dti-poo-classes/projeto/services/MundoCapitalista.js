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
        var maxSalario = 10;
        var ganhoDoDia = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
        var trabalhador = new Trabalhador(nomeTrabalhador, ganhoDoDia, dia, mes, ano);
        this.ListaDeTrabalhadores.push(trabalhador);
        return ganhoDoDia;
    };
    return MundoCapitalista;
}());
exports.MundoCapitalista = MundoCapitalista;
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
