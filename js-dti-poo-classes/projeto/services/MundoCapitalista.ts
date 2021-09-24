class Trabalhador {
    Nome: string; 
    Valor: number;

    public constructor(nome: string, valor: number) {
        this.Nome = nome; 
        this.Valor = valor; 
    }
}

export class MundoCapitalista {
    // Implementar o método Trabalhar() na classe MundoCapitalista
    // propriedades
    private ListaDeTrabalhadores: Array<Trabalhador>;

    // construtor 
    public constructor() {
        this.ListaDeTrabalhadores = new Array<Trabalhador>()
    }

    // métodos
    // public Trabalhar(nomeTrabalhador: string, salarioRecebido: number): void {
    //     const trabalhador = new Trabalhador(nomeTrabalhador, salarioRecebido);
    //     this.listaDeTrabalhadores.push(trabalhador)
    // }
}

// instanciar a classe 
// const <nome_da_variavel> = new <nome_da_classe>














// class Trabalhador {
//     Nome: string; 
//     Valor: number; 

//     constructor (nome: string, valor: number){
//         this.Nome = nome; 
//         this.Valor = valor; 
//     }
// }

// export class MundoCapitalista {
//     public Trabalhar(): void {
        
//     }
// }