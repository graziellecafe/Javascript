class Doacao {
    NomeDoador: string; 
    Valor: number;

    public constructor(nome: string, valor: number) {
        this.NomeDoador = nome; 
        this.Valor = valor;
    }
}

export class AcaoSocial {
    private ListaDeDoacoes: Array<Doacao>;

    public constructor() {
        this.ListaDeDoacoes = new Array<Doacao>();
    }

    public ReceberDoacao(nomeDoador: string,valorDoado: number): void {
        const doacaoRecebida = new Doacao(nomeDoador, valorDoado);     
        this.ListaDeDoacoes.push(doacaoRecebida);       
    }
}