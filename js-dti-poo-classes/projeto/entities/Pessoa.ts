import { FaseDeCrescimento } from "../enums/FaseDeCrescimento";

export class Pessoa {
    private Nome: string; 
    private Idade: number; 
    private Carteira: number; 

    private constructor(nome: string, idade: number) {
        this.Nome = nome; 
        this.Idade = idade; 
        this.Carteira = 0; 
    }

    public static Nascimento(nome: string, idade: number): Pessoa {
        return new Pessoa(nome, idade);
    }

    public ObterNome(): string {
        return this.Nome;
    }

    public DefinirNome(nome: string): void {
        this.Nome = nome;
    }

    public ObterIdade(): number {
        return this.Idade;
    }

    public DefinirIdade(idade: number) : void {
        this.Idade = idade;
    }

    public DefinirSaldoCarteira(dinheiro: number): void {
        this.Carteira = this.Carteira + dinheiro;
    }

    public ObterSaldoCarteira(): number {
        return this.Carteira;
    }

    public ObterFaseDeCrescimento(): FaseDeCrescimento {
        if(this.Idade >= 0 && this.Idade < 1) {
            return FaseDeCrescimento.Bebe;
        }

        if(this.Idade >= 1 && this.Idade < 10 ) {
            return FaseDeCrescimento.Crianca; 
        }   

        if(this.Idade >= 10 && this.Idade < 18) {
            return FaseDeCrescimento.Adolescente;
        }

        if(this.Idade >= 18 && this.Idade < 50) {
            return FaseDeCrescimento.Adulto;
        }

        if(this.Idade >= 50 && this.Idade < 100){
            return FaseDeCrescimento.Idoso;
        }

        return FaseDeCrescimento.Default;
    }

    public Envelhecer(anosDeVida: number): void {
        this.Idade = this.Idade + anosDeVida;
    }

    public Emprestimo(): void {
        const valorEmprestimo = 200;
        this.Carteira = this.Carteira + valorEmprestimo;  
    }
}