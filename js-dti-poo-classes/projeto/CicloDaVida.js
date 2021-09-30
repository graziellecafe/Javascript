"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./entities/Pessoa");
var AcaoSocial_1 = require("./services/AcaoSocial");
var MundoCapitalista_1 = require("./services/MundoCapitalista");
var CicloDaVida = /** @class */ (function () {
    function CicloDaVida(acaoSocial, mundoCapitalista) {
        this.dinheiroTotalEmprestadoPelaMae = 0;
        this.countQuantidadeEmprestimos = 0;
        this.valorDoEmprestimo = 200;
        this.AcaoSocial = acaoSocial;
        this.MundoCapitalista = mundoCapitalista;
    }
    CicloDaVida.prototype.Genesis = function () {
        var grazielle = Pessoa_1.Pessoa.Nascimento('Grazielle', 0);
        this.CicloDaPessoa(grazielle);
    };
    CicloDaVida.prototype.CicloDaPessoa = function (pessoa) {
        var vivo = true;
        while (vivo) {
            if (this.ValidarFaseAdulta(pessoa.ObterIdade())) {
                this.FaseDeVidaAdulta(pessoa);
            }
            pessoa.Envelhecer(1);
            if (pessoa.ObterIdade() > 18) {
                vivo = false;
                console.log("A " + pessoa.ObterNome() + " encerrou o ciclo da vida.");
            }
        }
    };
    CicloDaVida.prototype.FaseDeVidaAdulta = function (pessoa) {
        console.log('\n');
        console.log('                   INÍCIO DO CICLO DA VIDA                   ');
        for (var meses = 1; meses <= 1; meses++) {
            for (var dias = 1; dias < 31; dias++) {
                this.Trabalhar(pessoa, dias, meses);
                this.ValidarIdaAoMercado(pessoa, dias);
                this.ValidarDiaDeDoacao(pessoa, dias);
                this.ValidarPagamentoEmprestimo(pessoa);
            }
        }
    };
    CicloDaVida.prototype.ValidarFaseAdulta = function (idade) {
        if (idade >= 18 && idade <= 60) {
            return true;
        }
        return false;
    };
    CicloDaVida.prototype.Trabalhar = function (pessoa, diaDoMes, mes) {
        var salario = this.MundoCapitalista.Trabalhar(pessoa.ObterNome(), diaDoMes, mes, pessoa.ObterIdade());
        pessoa.DefinirSaldoCarteira(salario);
        console.log("[TRABALHO] Idade: " + pessoa.ObterIdade() + " anos | M\u00EAs: " + mes + " | Dia: " + diaDoMes + " | Sal\u00E1rio recebido: R$" + salario);
    };
    CicloDaVida.prototype.ValidarIdaAoMercado = function (pessoa, diaDoMes) {
        if (diaDoMes % 5 === 0) {
            console.log("[SALDO NA CARTEIRA ATUALIZADO] R$" + pessoa.ObterSaldoCarteira());
            console.log('\n');
            console.log('[MERCADO] Chegou ao mercado.');
            var valorDaCompra = this.MundoCapitalista.CalculaValorDaCompra();
            this.RealizaCompra(pessoa, valorDaCompra);
        }
    };
    CicloDaVida.prototype.RealizaCompra = function (pessoa, valorDaCompra) {
        var salarioAntesDaCompra = pessoa.ObterSaldoCarteira();
        if (salarioAntesDaCompra >= valorDaCompra) {
            pessoa.DefinirSaldoCarteira(-valorDaCompra);
            console.log("[COMPRA REALIZADA] Valor da compra: R$" + valorDaCompra + " | Saldo p\u00F3s compra: " + pessoa.ObterSaldoCarteira());
            console.log('\n');
        }
        else {
            console.log("[COMPRA N\u00C3O AUTORIZADA] O valor da compra de R$" + valorDaCompra + " excede seu saldo.");
            console.log('\n');
            this.dinheiroTotalEmprestadoPelaMae += this.valorDoEmprestimo;
            this.countQuantidadeEmprestimos += 1;
            console.log("[EMPR\u00C9STIMO] Solicitou um empr\u00E9stimo de R$" + this.valorDoEmprestimo + ". Total de " + this.countQuantidadeEmprestimos + " empr\u00E9stimos acumulados.");
            pessoa.DefinirSaldoCarteira(this.valorDoEmprestimo);
            this.RealizaCompra(pessoa, valorDaCompra);
        }
    };
    CicloDaVida.prototype.ValidarDiaDeDoacao = function (pessoa, diaDoMes) {
        var saldoMinimoParaDoar = 300;
        var valorParaDoacao = 50;
        if (diaDoMes === 30) {
            if (pessoa.ObterSaldoCarteira() >= saldoMinimoParaDoar) {
                var saldoAnterior = pessoa.ObterSaldoCarteira();
                this.AcaoSocial.ReceberDoacao(pessoa.ObterNome(), valorParaDoacao);
                pessoa.DefinirSaldoCarteira(-valorParaDoacao);
                console.log("[CARIDADE] Nome do Doador: " + pessoa.ObterNome() + " | Valor da doa\u00E7\u00E3o: R$" + valorParaDoacao + " | Valor saldo anterior: R$" + saldoAnterior + " | Saldo ap\u00F3s doa\u00E7\u00E3o: R$" + pessoa.ObterSaldoCarteira());
                console.log('\n');
            }
        }
    };
    CicloDaVida.prototype.ValidarPagamentoEmprestimo = function (pessoa) {
        if (this.dinheiroTotalEmprestadoPelaMae > 0) {
            console.log('\n');
            var valorQueDevo = this.dinheiroTotalEmprestadoPelaMae;
            var saldoQueTenho = pessoa.ObterSaldoCarteira();
            console.log("[EMPR\u00C9STIMO] Saldo atual: R$" + pessoa.ObterSaldoCarteira() + " | Valor a pagar: R$" + this.dinheiroTotalEmprestadoPelaMae);
            if (saldoQueTenho > valorQueDevo) {
                pessoa.DefinirSaldoCarteira(-valorQueDevo);
                this.dinheiroTotalEmprestadoPelaMae = 0;
                console.log("[EMPR\u00C9STIMO] N\u00E3o h\u00E1 mais empr\u00E9stimos a serem pagos.");
            }
            else {
                this.dinheiroTotalEmprestadoPelaMae -= saldoQueTenho;
                pessoa.DefinirSaldoCarteira(-saldoQueTenho);
                console.log("[EMPR\u00C9STIMO] H\u00E1 d\u00E9bitos a serem realizados no valor de R" + this.dinheiroTotalEmprestadoPelaMae);
            }
        }
    };
    return CicloDaVida;
}());
new CicloDaVida(new AcaoSocial_1.AcaoSocial(), new MundoCapitalista_1.MundoCapitalista()).Genesis();
