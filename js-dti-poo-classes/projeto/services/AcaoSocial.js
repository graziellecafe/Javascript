"use strict";
exports.__esModule = true;
exports.AcaoSocial = void 0;
var Doador = /** @class */ (function () {
    function Doador(nome, valor) {
        this.Nome = nome;
        this.Valor = valor;
    }
    return Doador;
}());
var AcaoSocial = /** @class */ (function () {
    function AcaoSocial() {
        this.ListaDeDoadores = new Array();
    }
    AcaoSocial.prototype.RealizarDoacaoParaCaridade = function (nomeDoador, valorDoado) {
        var doacaoRecebida = new Doador(nomeDoador, valorDoado);
        this.ListaDeDoadores.push(doacaoRecebida);
    };
    return AcaoSocial;
}());
exports.AcaoSocial = AcaoSocial;
// Javascript
// const lista = [{
//     nome: '', 
//     valor: 0,
// }]
