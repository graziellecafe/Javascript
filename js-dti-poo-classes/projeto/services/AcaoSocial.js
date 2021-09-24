"use strict";
exports.__esModule = true;
exports.AcaoSocial = void 0;
var Doacao = /** @class */ (function () {
    function Doacao(nome, valor) {
        this.NomeDoador = nome;
        this.Valor = valor;
    }
    return Doacao;
}());
var AcaoSocial = /** @class */ (function () {
    function AcaoSocial() {
        this.ListaDeDoacoes = new Array();
    }
    AcaoSocial.prototype.ReceberDoacao = function (nomeDoador, valorDoado) {
        var doacaoRecebida = new Doacao(nomeDoador, valorDoado);
        this.ListaDeDoacoes.push(doacaoRecebida);
    };
    return AcaoSocial;
}());
exports.AcaoSocial = AcaoSocial;
