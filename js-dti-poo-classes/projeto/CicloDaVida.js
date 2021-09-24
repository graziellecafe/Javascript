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
        console.log('');
        console.log(' --------------------------------------------INICIO-------------------------------------------- ');
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
        var dinheiroTotalEmprestadoPelaMae = 0;
        var countQuantidadeEmprestimos = 0;
        var valorDoEmprestimo = 200;
        for (var meses = 1; meses <= 1; meses++) {
            for (var dias = 1; dias < 31; dias++) {
                //this.RealizarTrabalho(pessoa);
                var salario = this.MundoCapitalista.Trabalhar(pessoa.ObterNome(), dias, meses, pessoa.ObterIdade());
                pessoa.DefinirSaldoCarteira(salario);
                console.log("[Idade: " + pessoa.ObterIdade() + " anos] [M\u00EAs: " + meses + "] [Dia: " + dias + "] [Sal\u00E1rio recebido: R$" + salario + "].");
                // Verifica a possibilidade de pagamento do empréstimo
                if (dinheiroTotalEmprestadoPelaMae > 0 && pessoa.ObterSaldoCarteira() >= dinheiroTotalEmprestadoPelaMae) {
                    console.log("O saldo atual \u00E9 de R$" + pessoa.ObterSaldoCarteira() + ".");
                    pessoa.DefinirSaldoCarteira(-dinheiroTotalEmprestadoPelaMae);
                    console.log('');
                    console.log("\u00C9 poss\u00EDvel pagar um empr\u00E9stimo de R$" + valorDoEmprestimo + ". O saldo p\u00F3s pagamento \u00E9 de R$" + pessoa.ObterSaldoCarteira());
                    countQuantidadeEmprestimos -= 1;
                    if (countQuantidadeEmprestimos === 0) {
                        console.log('Não há mais empréstimos a serem pagos!');
                    }
                    else {
                        console.log("Ainda h\u00E1 " + countQuantidadeEmprestimos + " a serem pagos, ou seja, R" + dinheiroTotalEmprestadoPelaMae + ".");
                    }
                    console.log('');
                }
                // REALIZAÇÃO DE COMPRAS
                if (dias % 5 === 0) {
                    var valorDaCompra = pessoa.CalculaValorDaCompra();
                    var salarioAntesDaCompra = pessoa.ObterSaldoCarteira();
                    console.log("Sal\u00E1rio acumulado na carteira: R$" + salarioAntesDaCompra);
                    console.log('');
                    console.log(' -------------------------------------------MERCADO-------------------------------------------- ');
                    if (salarioAntesDaCompra >= valorDaCompra) {
                        pessoa.DefinirSaldoCarteira(-valorDaCompra);
                        console.log("O valor calculado para a realiza\u00E7\u00E3o desta compra \u00E9 de R$" + valorDaCompra + ".");
                        console.log("Compra efetivada com sucesso. Saldo p\u00F3s compra: [R$" + salarioAntesDaCompra + " - R$" + valorDaCompra + " = R$ " + pessoa.ObterSaldoCarteira() + "]");
                    }
                    else {
                        console.log("Saldo insuficiente. O c\u00E1lculo do valor da compra desejada \u00E9 de R$" + valorDaCompra + ".");
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
                    }
                    console.log(' ---------------------------------------------------------------------------------------------- ');
                    console.log('');
                }
                this.ValidarDiaDeDoacao(dias, pessoa);
            }
        }
    };
    CicloDaVida.prototype.ValidarFaseAdulta = function (idade) {
        if (idade >= 18 && idade <= 60) {
            return true;
        }
        return false;
    };
    CicloDaVida.prototype.ValidarDiaDeDoacao = function (diaDoMes, pessoa) {
        var saldoMinimoParaDoar = 300;
        var valorParaDoacao = 50;
        if (diaDoMes === 30) {
            console.log('');
            console.log(' -------------------------------------------CARIDADE------------------------------------------- ');
            if (pessoa.ObterSaldoCarteira() >= saldoMinimoParaDoar) {
                var saldoAnterior = pessoa.ObterSaldoCarteira();
                this.AcaoSocial.ReceberDoacao(pessoa.ObterNome(), valorParaDoacao);
                console.log("Nome do Doador: " + pessoa.ObterNome());
                console.log("Valor da doa\u00E7\u00E3o: R$" + valorParaDoacao);
                console.log("Valor saldo anterior: R$" + saldoAnterior);
                pessoa.DefinirSaldoCarteira(-valorParaDoacao);
                console.log("Saldo ap\u00F3s doa\u00E7\u00E3o: R$" + pessoa.ObterSaldoCarteira());
            }
            console.log(' ---------------------------------------------------------------------------------------------- ');
            console.log('');
        }
    };
    return CicloDaVida;
}());
new CicloDaVida(new AcaoSocial_1.AcaoSocial(), new MundoCapitalista_1.MundoCapitalista()).Genesis();
