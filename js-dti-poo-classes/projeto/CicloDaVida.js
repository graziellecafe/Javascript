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
                console.log("[MERCADO: COMPRA REALIZADA] Valor da compra: R$" + valorDaCompra + " | Saldo p\u00F3s compra: R$" + salarioAntesDaCompra + " - R$" + valorDaCompra + " = R$ " + pessoa.ObterSaldoCarteira());
                console.log('\n');
            }
            else {
                console.log("[MERCADO: SALDO INSUFICIENTE] O valor da compra de R" + valorDaCompra + " excede seu saldo. ");
                console.log('\n');
                // this.ValidarPedidoEmprestimo(pessoa);
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
    return CicloDaVida;
}());
new CicloDaVida(new AcaoSocial_1.AcaoSocial(), new MundoCapitalista_1.MundoCapitalista()).Genesis();
