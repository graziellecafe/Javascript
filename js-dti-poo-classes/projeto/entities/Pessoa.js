"use strict";
exports.__esModule = true;
exports.Pessoa = void 0;
var FaseDeCrescimento_1 = require("../enums/FaseDeCrescimento");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
        this.Carteira = 0;
    }
    Pessoa.Nascimento = function (nome, idade) {
        return new Pessoa(nome, idade);
    };
    Pessoa.prototype.ObterNome = function () {
        return this.Nome;
    };
    Pessoa.prototype.DefinirNome = function (nome) {
        this.Nome = nome;
    };
    Pessoa.prototype.ObterIdade = function () {
        return this.Idade;
    };
    Pessoa.prototype.DefinirIdade = function (idade) {
        this.Idade = idade;
    };
    Pessoa.prototype.DefinirSaldoCarteira = function (dinheiro) {
        this.Carteira = this.Carteira + dinheiro;
    };
    Pessoa.prototype.ObterSaldoCarteira = function () {
        return this.Carteira;
    };
    Pessoa.prototype.ObterFaseDeCrescimento = function () {
        if (this.Idade >= 0 && this.Idade < 1) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Bebe;
        }
        if (this.Idade >= 1 && this.Idade < 10) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Crianca;
        }
        if (this.Idade >= 10 && this.Idade < 18) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Adolescente;
        }
        if (this.Idade >= 18 && this.Idade < 50) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Adulto;
        }
        if (this.Idade >= 50 && this.Idade < 100) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Idoso;
        }
        return FaseDeCrescimento_1.FaseDeCrescimento.Default;
    };
    Pessoa.prototype.Envelhecer = function (anosDeVida) {
        this.Idade = this.Idade + anosDeVida;
    };
    Pessoa.prototype.Trabalhar = function () {
        var minSalario = 1;
        var maxSalario = 100;
        return Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
    };
    Pessoa.prototype.CalculaValorDaCompra = function () {
        var maxGastos = 50;
        var minGastos = 100;
        return Math.ceil(Math.random() * (maxGastos - minGastos) + minGastos);
    };
    Pessoa.prototype.Emprestimo = function () {
        var valorEmprestimo = 200;
        this.Carteira = this.Carteira + valorEmprestimo;
    };
    Pessoa.prototype.Caridade = function (dinheiro) {
        return this.Carteira = this.Carteira - dinheiro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
