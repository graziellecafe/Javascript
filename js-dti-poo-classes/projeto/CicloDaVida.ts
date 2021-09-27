import { Pessoa } from "./entities/Pessoa";
import { AcaoSocial } from "./services/AcaoSocial"
import { MundoCapitalista } from "./services/MundoCapitalista"

class CicloDaVida { 
    private readonly AcaoSocial: AcaoSocial;
    private readonly MundoCapitalista: MundoCapitalista; 

    public constructor (acaoSocial: AcaoSocial, mundoCapitalista: MundoCapitalista) {
        this.AcaoSocial = acaoSocial; 
        this.MundoCapitalista = mundoCapitalista;
    }

    public Genesis(): void { 
        const grazielle = Pessoa.Nascimento('Grazielle', 0)              
        this.CicloDaPessoa(grazielle);
    }

    private CicloDaPessoa(pessoa: Pessoa): void {
        let vivo = true;         
        while (vivo) { 
            if (this.ValidarFaseAdulta(pessoa.ObterIdade())){
                this.FaseDeVidaAdulta(pessoa); 
            }          
            
            pessoa.Envelhecer(1);

            if(pessoa.ObterIdade() > 18){
                vivo = false;
                console.log(`A ${pessoa.ObterNome()} encerrou o ciclo da vida.`);
            }
        }
    }

    private FaseDeVidaAdulta(pessoa: Pessoa): void {
        console.log('\n');
        console.log('                   INÍCIO DO CICLO DA VIDA                   ');
        for (let meses = 1; meses <= 1; meses++){
            for (let dias = 1; dias < 31; dias++){          
                this.ValidarDiaDeTrabalho(pessoa, dias, meses);
                this.ValidarIdaAoMercado(pessoa, dias);             
                this.ValidarDiaDeDoacao(pessoa, dias);
            } 
        }        
    }

    private ValidarFaseAdulta(idade: number): boolean {
        if (idade >= 18 && idade <= 60) {
            return true;
        }

        return false; 
    }

    private ValidarDiaDeTrabalho(pessoa: Pessoa, diaDoMes: number, mes: number): void {
        let salario = this.MundoCapitalista.Trabalhar(pessoa.ObterNome(), diaDoMes, mes, pessoa.ObterIdade());
        pessoa.DefinirSaldoCarteira(salario);
        console.log(`[TRABALHO] Idade: ${pessoa.ObterIdade()} anos | Mês: ${mes} | Dia: ${diaDoMes} | Salário recebido: R$${salario}`);
    }
    
    private ValidarIdaAoMercado(pessoa: Pessoa, diaDoMes: number): void {
        if(diaDoMes%5 === 0){

            const valorDaCompra = pessoa.CalculaValorDaCompra(); 
            let salarioAntesDaCompra = pessoa.ObterSaldoCarteira(); 
            console.log(`[SALÁRIO ACUMULADO] R$${salarioAntesDaCompra}`);
            console.log('\n');

            if(salarioAntesDaCompra >= valorDaCompra) {
                pessoa.DefinirSaldoCarteira(-valorDaCompra);
                console.log(`[MERCADO: COMPRA REALIZADA] Valor da compra: R$${valorDaCompra} | Saldo pós compra: R$${salarioAntesDaCompra} - R$${valorDaCompra} = R$ ${pessoa.ObterSaldoCarteira()}`);
                console.log('\n');
            }
            else {                  
                console.log(`[MERCADO: SALDO INSUFICIENTE] O valor da compra de R${valorDaCompra} excede seu saldo. `);
                console.log('\n');
                // this.ValidarPedidoEmprestimo(pessoa);
            }
        }  
    }

    private ValidarDiaDeDoacao(pessoa: Pessoa, diaDoMes: number): void {        
        const saldoMinimoParaDoar = 300;
        const valorParaDoacao = 50;  

        if(diaDoMes === 30){
            if(pessoa.ObterSaldoCarteira() >= saldoMinimoParaDoar){
                let saldoAnterior = pessoa.ObterSaldoCarteira();
                this.AcaoSocial.ReceberDoacao(pessoa.ObterNome(), valorParaDoacao);
                pessoa.DefinirSaldoCarteira(-valorParaDoacao);
                console.log(`[CARIDADE] Nome do Doador: ${pessoa.ObterNome()} | Valor da doação: R$${valorParaDoacao} | Valor saldo anterior: R$${saldoAnterior} | Saldo após doação: R$${pessoa.ObterSaldoCarteira()}`);
                console.log('\n');
            }                    
        }
    }
    
    // private ValidarPedidoEmprestimo(pessoa: Pessoa): void {
    //     let valorDaCompra = pessoa.CalculaValorDaCompra();
    //     let dinheiroTotalEmprestadoPelaMae = 0; 
    //     let countQuantidadeEmprestimos = 0; 
    //     const valorDoEmprestimo = 200;         
        
    //     console.log(`[EMPRÉSTIMO REALIZADO] Empréstimo no valor de R$${valorDoEmprestimo} realizado. Total de ${countQuantidadeEmprestimos} empréstimo(s) acumulados.`);
    //     console.log(`[SALÁRIO ACUMULADO] [R$${pessoa.ObterSaldoCarteira()}]`);             
    //     if(pessoa.ObterSaldoCarteira() >= valorDaCompra){
    //         dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
    //         countQuantidadeEmprestimos += 1; 
    //         pessoa.DefinirSaldoCarteira(-valorDaCompra); 
    //     }
    //     else{
    //         pessoa.DefinirSaldoCarteira(valorDoEmprestimo);
    //         dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
    //         countQuantidadeEmprestimos += 1; 

    //         console.log(`[MERCADO: SALDO INSUFICIENTE] Não foi possível efetuar a compra. `);
    //         console.log(`Há um total de ${countQuantidadeEmprestimos} empréstimos adquiridos, ou seja, R$${dinheiroTotalEmprestadoPelaMae} em dívida.`); 
    //     }
    // }

    // private ValidarPagamentoEmprestimo(pessoa: Pessoa): void {
    //     this.ValidarPedidoEmprestimo(pessoa);
    //     // Dúvida
    //     let dinheiroTotalEmprestadoPelaMae = this.ValidarPedidoEmprestimo

    //     if (dinheiroTotalEmprestadoPelaMae > 0 && pessoa.ObterSaldoCarteira() >= dinheiroTotalEmprestadoPelaMae){
    //         console.log('\n');
    //         console.log(`[EMPRÉSTIMO] Saldo atual: R$${pessoa.ObterSaldoCarteira()}`);            
    //         pessoa.DefinirSaldoCarteira(-dinheiroTotalEmprestadoPelaMae);
    //         countQuantidadeEmprestimos -= 1; 
    //         console.log(`[EMPRÉSTIMO] Empréstimo de: R$${valorDoEmprestimo} | Saldo pós empréstimo: R$${pessoa.ObterSaldoCarteira()}`);
            
    //         if(countQuantidadeEmprestimos === 0){
    //             console.log('[EMPRÉSTIMO] Não há mais empréstimos a serem pagos.');
    //         }
    //         else{
    //             console.log(`[EMPRÉSTIMO] Quantidade de empréstimos: ${countQuantidadeEmprestimos} | Valor R${dinheiroTotalEmprestadoPelaMae}.`);
    //         }
    //     }
    // }
}

new CicloDaVida(new AcaoSocial(), new MundoCapitalista()).Genesis(); 



