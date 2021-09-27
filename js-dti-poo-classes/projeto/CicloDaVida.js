"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./entities/Pessoa");
var AcaoSocial_1 = require("./services/AcaoSocial");
var MundoCapitalista_1 = require("./services/MundoCapitalista");
var CicloDaVida = /** @class */ (function () {
    function CicloDaVida(acaoSocial, mundoCapitalista) {
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
                this.ValidarDiaDeTrabalho(pessoa, dias, meses);
                this.ValidarIdaAoMercado(pessoa, dias);
                this.ValidarDiaDeDoacao(pessoa, dias);
                this.ValidarPedidoEmprestimo;
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
    CicloDaVida.prototype.ValidarDiaDeTrabalho = function (pessoa, diaDoMes, mes) {
        var salario = this.MundoCapitalista.Trabalhar(pessoa.ObterNome(), diaDoMes, mes, pessoa.ObterIdade());
        pessoa.DefinirSaldoCarteira(salario);
        console.log("[TRABALHO] Idade: " + pessoa.ObterIdade() + " anos | M\u00EAs: " + mes + " | Dia: " + diaDoMes + " | Sal\u00E1rio recebido: R$" + salario);
    };
    CicloDaVida.prototype.ValidarIdaAoMercado = function (pessoa, diaDoMes) {
        if (diaDoMes % 5 === 0) {
            var valorDaCompra = pessoa.CalculaValorDaCompra();
            var salarioAntesDaCompra = pessoa.ObterSaldoCarteira();
            console.log("[SAL\u00C1RIO ACUMULADO] R$" + salarioAntesDaCompra);
            console.log('\n');
            if (salarioAntesDaCompra >= valorDaCompra) {
                pessoa.DefinirSaldoCarteira(-valorDaCompra);
                console.log("[MERCADO] Valor da compra: R$" + valorDaCompra + " | Saldo p\u00F3s compra: R$" + salarioAntesDaCompra + " - R$" + valorDaCompra + " = R$ " + pessoa.ObterSaldoCarteira());
                console.log('\n');
            }
            else {
                console.log("[MERCADO] Saldo insuficiente para compra.");
                console.log('\n');
                // this.ValidarPedidoEmprestimo(pessoa, valorDaCompra);
            }
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
    CicloDaVida.prototype.ValidarPedidoEmprestimo = function (pessoa, valorDaCompra) {
        var dinheiroTotalEmprestadoPelaMae = 0;
        var countQuantidadeEmprestimos = 0;
        var valorDoEmprestimo = 200;
        dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
        countQuantidadeEmprestimos += 1;
        var saldoAposEmprestimo = pessoa.DefinirSaldoCarteira(valorDoEmprestimo);
        console.log("Portanto, um empr\u00E9stimo de R$" + valorDoEmprestimo + " \u00E9 realizado, totalizando um total de " + countQuantidadeEmprestimos + " empr\u00E9stimo(s) feitos.");
        console.log("Saldo atualizado p\u00F3s empr\u00E9stimo: [R$" + pessoa.ObterSaldoCarteira() + "]");
        if (pessoa.ObterSaldoCarteira() >= valorDaCompra) {
            pessoa.DefinirSaldoCarteira(-valorDaCompra);
            console.log("Desta forma, foi poss\u00EDvel realizar a compra. O saldo atual \u00E9 de: [R$" + pessoa.ObterSaldoCarteira() + "] ");
        }
        else {
            pessoa.DefinirSaldoCarteira(valorDoEmprestimo);
            dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
            countQuantidadeEmprestimos += 1;
            console.log("Ainda n\u00E3o foi poss\u00EDvel realizar a compra. Outro empr\u00E9stimo foi efetuado.");
            console.log("H\u00E1 um total de " + countQuantidadeEmprestimos + " empr\u00E9stimos adquiridos, ou seja, R$" + dinheiroTotalEmprestadoPelaMae + " em d\u00EDvida.");
        }
    };
    CicloDaVida.prototype.ValidarPagamentoEmprestimo = function (pessoa) {
        var dinheiroTotalEmprestadoPelaMae = 0;
        var countQuantidadeEmprestimos = 0;
        var valorDoEmprestimo = 200;
        if (dinheiroTotalEmprestadoPelaMae > 0 && pessoa.ObterSaldoCarteira() >= dinheiroTotalEmprestadoPelaMae) {
            console.log('\n');
            console.log("[EMPR\u00C9STIMO] Saldo atual: R$" + pessoa.ObterSaldoCarteira());
            pessoa.DefinirSaldoCarteira(-dinheiroTotalEmprestadoPelaMae);
            countQuantidadeEmprestimos -= 1;
            console.log("[EMPR\u00C9STIMO] Empr\u00E9stimo de: R$" + valorDoEmprestimo + " | Saldo p\u00F3s empr\u00E9stimo: R$" + pessoa.ObterSaldoCarteira());
            if (countQuantidadeEmprestimos === 0) {
                console.log('[EMPRÉSTIMO] Não há mais empréstimos a serem pagos.');
            }
            else {
                console.log("[EMPR\u00C9STIMO] Quantidade de empr\u00E9stimos: " + countQuantidadeEmprestimos + " | Valor R" + dinheiroTotalEmprestadoPelaMae + ".");
            }
        }
    };
    return CicloDaVida;
}());
new CicloDaVida(new AcaoSocial_1.AcaoSocial(), new MundoCapitalista_1.MundoCapitalista()).Genesis();
