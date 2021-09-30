import { Pessoa } from "./entities/Pessoa";
import { AcaoSocial } from "./services/AcaoSocial"
import { MundoCapitalista } from "./services/MundoCapitalista"

class CicloDaVida { 
    private emprestimoTotalAPagar = 0; 
    private valorDoEmprestimo = 200;  

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
        console.log('\n');       
        console.log(`[INÍCIO] Nome: ${pessoa.ObterNome()}`);
        while (vivo) { 
            if (this.ValidarFaseAdulta(pessoa.ObterIdade())){
                this.FaseDeVidaAdulta(pessoa); 
            }          
            
            pessoa.Envelhecer(1);

            if(pessoa.ObterIdade() > 18){
                vivo = false;
                console.log(`[FIM DO CICLO DA VIDA] A ${pessoa.ObterNome()} encerrou o ciclo da vida.`);
            }
        }
    }

    private FaseDeVidaAdulta(pessoa: Pessoa): void {
        for (let meses = 1; meses <= 1; meses++){
            for (let dias = 1; dias < 31; dias++){          
                this.Trabalhar(pessoa, dias, meses);
                this.Mercado(pessoa, dias);             
                this.ValidarDiaDeDoacao(pessoa, dias);
                this.ValidarPagamentoEmprestimo(pessoa);
            } 
        }        
    }

    private ValidarFaseAdulta(idade: number): boolean {
        if (idade >= 18 && idade <= 60) {
            return true;
        }

        return false; 
    }

    private Trabalhar(pessoa: Pessoa, diaDoMes: number, mes: number): void {
        let salario = this.MundoCapitalista.Trabalhar(pessoa.ObterNome(), diaDoMes, mes, pessoa.ObterIdade());
        pessoa.DefinirSaldoCarteira(salario);
        console.log(`[TRABALHO] Idade: ${pessoa.ObterIdade()} anos | Mês: ${mes} | Dia: ${diaDoMes} | Salário recebido: R$${salario}`);
    }
    
    private Mercado(pessoa: Pessoa, diaDoMes: number): void {
        if(diaDoMes%5 === 0){
            console.log('\n');
            console.log(`[MERCADO] Ida ao mercado. Saldo disponível de R$${pessoa.ObterSaldoCarteira()}`);
            const valorDaCompra = this.MundoCapitalista.CalculaValorDaCompra();              
            this.RealizaCompra(pessoa, valorDaCompra);
        } 
    }
    
    private RealizaCompra(pessoa: Pessoa, valorDaCompra: number): void {
        let salarioAntesDaCompra = pessoa.ObterSaldoCarteira();
        if(salarioAntesDaCompra >= valorDaCompra) {
            pessoa.DefinirSaldoCarteira(-valorDaCompra);
            console.log(`[COMPRA REALIZADA] Valor da compra: R$${valorDaCompra} | Saldo pós compra: R$${pessoa.ObterSaldoCarteira()}`);
        }
        else {                  
            console.log(`[COMPRA NÃO AUTORIZADA] O valor da compra de R$${valorDaCompra} excede seu saldo de R$${pessoa.ObterSaldoCarteira()}.`);
            this.emprestimoTotalAPagar += this.valorDoEmprestimo;
            console.log(`[EMPRÉSTIMO] Solicitou um empréstimo de R$${this.valorDoEmprestimo}.`);
            pessoa.DefinirSaldoCarteira(this.valorDoEmprestimo);
            this.RealizaCompra(pessoa, valorDaCompra);
        }
    }

    private ValidarPagamentoEmprestimo(pessoa: Pessoa): void {
        if (this.emprestimoTotalAPagar > 0){
            console.log('\n');
            
            const valorQueDevo = this.emprestimoTotalAPagar; 
            const saldoQueTenho = pessoa.ObterSaldoCarteira();
            console.log(`[EMPRÉSTIMO] Saldo atual: R$${pessoa.ObterSaldoCarteira()} | Valor a pagar: R$${this.emprestimoTotalAPagar}`);
            
            if(saldoQueTenho > valorQueDevo){
                pessoa.DefinirSaldoCarteira(-valorQueDevo);
                this.emprestimoTotalAPagar = 0;  
                console.log(`[DÍVIDA QUITADA] Saldo atual de R${pessoa.ObterSaldoCarteira()}`);               
            }
            else{
                this.emprestimoTotalAPagar -= saldoQueTenho; 
                pessoa.DefinirSaldoCarteira(-saldoQueTenho);
                console.log(`[DÉBITOS] Há débitos a serem realizados no valor de R$${this.emprestimoTotalAPagar}`);
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
    
}

new CicloDaVida(new AcaoSocial(), new MundoCapitalista()).Genesis(); 



