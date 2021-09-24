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
        
        console.log('');
        console.log(' --------------------------------------------INICIO-------------------------------------------- ');
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
        let dinheiroTotalEmprestadoPelaMae = 0; 
        let countQuantidadeEmprestimos = 0; 
        const valorDoEmprestimo = 200; 

        for (let meses = 1; meses <= 1; meses++){
            for (let dias = 1; dias < 31; dias++){ 
                //this.RealizarTrabalho(pessoa);

                let salario = this.MundoCapitalista.Trabalhar(pessoa.ObterNome(), dias, meses, pessoa.ObterIdade());
                pessoa.DefinirSaldoCarteira(salario);
                console.log(`[Idade: ${pessoa.ObterIdade()} anos] [Mês: ${meses}] [Dia: ${dias}] [Salário recebido: R$${salario}].`);
        
                // Verifica a possibilidade de pagamento do empréstimo
                if (dinheiroTotalEmprestadoPelaMae > 0 && pessoa.ObterSaldoCarteira() >= dinheiroTotalEmprestadoPelaMae){
                    console.log(`O saldo atual é de R$${pessoa.ObterSaldoCarteira()}.`);
                    
                    pessoa.DefinirSaldoCarteira(-dinheiroTotalEmprestadoPelaMae);
        
                    console.log('');
                    console.log(`É possível pagar um empréstimo de R$${valorDoEmprestimo}. O saldo pós pagamento é de R$${pessoa.ObterSaldoCarteira()}`);
                    countQuantidadeEmprestimos -= 1; 
                    
                    if(countQuantidadeEmprestimos === 0){
                        console.log('Não há mais empréstimos a serem pagos!');
                    }
                    else{
                        console.log(`Ainda há ${countQuantidadeEmprestimos} a serem pagos, ou seja, R${dinheiroTotalEmprestadoPelaMae}.`);
                    }
        
                    console.log('');
                }
                

            // REALIZAÇÃO DE COMPRAS
                if(dias%5 === 0){
                    const valorDaCompra = pessoa.CalculaValorDaCompra(); 
                    let salarioAntesDaCompra = pessoa.ObterSaldoCarteira(); 
                    console.log(`Salário acumulado na carteira: R$${salarioAntesDaCompra}`);

                    console.log('');
                    console.log(' -------------------------------------------MERCADO-------------------------------------------- ');

                    if(salarioAntesDaCompra >= valorDaCompra) {
                        pessoa.DefinirSaldoCarteira(-valorDaCompra);
                        console.log(`O valor calculado para a realização desta compra é de R$${valorDaCompra}.`);
                        console.log(`Compra efetivada com sucesso. Saldo pós compra: [R$${salarioAntesDaCompra} - R$${valorDaCompra} = R$ ${pessoa.ObterSaldoCarteira()}]`);
                    }
                    else {                        
                        console.log(`Saldo insuficiente. O cálculo do valor da compra desejada é de R$${valorDaCompra}.`);
                        dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
                        countQuantidadeEmprestimos += 1; 
                        let saldoAposEmprestimo = pessoa.DefinirSaldoCarteira(valorDoEmprestimo);

                        console.log(`Portanto, um empréstimo de R$${valorDoEmprestimo} é realizado, totalizando um total de ${countQuantidadeEmprestimos} empréstimo(s) feitos.`);
                        console.log(`Saldo atualizado pós empréstimo: [R$${pessoa.ObterSaldoCarteira()}]`); 
                        
                        if(pessoa.ObterSaldoCarteira() >= valorDaCompra){
                            pessoa.DefinirSaldoCarteira(-valorDaCompra); 
                            console.log(`Desta forma, foi possível realizar a compra. O saldo atual é de: [R$${pessoa.ObterSaldoCarteira()}] `);
                        }
                        else{
                            pessoa.DefinirSaldoCarteira(valorDoEmprestimo);

                            dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
                            countQuantidadeEmprestimos += 1; 

                            console.log(`Ainda não foi possível realizar a compra. Outro empréstimo foi efetuado.`);
                            console.log(`Há um total de ${countQuantidadeEmprestimos} empréstimos adquiridos, ou seja, R$${dinheiroTotalEmprestadoPelaMae} em dívida.`); 

                        }
                    }
                    console.log(' ---------------------------------------------------------------------------------------------- ');
                    console.log('');
                }  
                
                this.ValidarDiaDeDoacao(dias, pessoa);
            } 
        }        
    }

    private ValidarFaseAdulta(idade: number): boolean {
        if (idade >= 18 && idade <= 60) {
            return true;
        }
        
        return false; 
    }

    private ValidarDiaDeDoacao(diaDoMes: number, pessoa: Pessoa): void {        
        const saldoMinimoParaDoar = 300;
        const valorParaDoacao = 50;  

        if(diaDoMes === 30){
            console.log('');
            console.log(' -------------------------------------------CARIDADE------------------------------------------- ');

            if(pessoa.ObterSaldoCarteira() >= saldoMinimoParaDoar){
                let saldoAnterior = pessoa.ObterSaldoCarteira();
                this.AcaoSocial.ReceberDoacao(pessoa.ObterNome(), valorParaDoacao);
                console.log(`Nome do Doador: ${pessoa.ObterNome()}`);
                console.log(`Valor da doação: R$${valorParaDoacao}`);
                console.log(`Valor saldo anterior: R$${saldoAnterior}`);
                pessoa.DefinirSaldoCarteira(-valorParaDoacao);
                console.log(`Saldo após doação: R$${pessoa.ObterSaldoCarteira()}`);
            }                    
            console.log(' ---------------------------------------------------------------------------------------------- ');
            console.log('');
        }
    }

    // private ValidarDiaDeTrabalho(pessoa: Pessoa): void {
    // }
}

new CicloDaVida(new AcaoSocial(), new MundoCapitalista()).Genesis(); 



