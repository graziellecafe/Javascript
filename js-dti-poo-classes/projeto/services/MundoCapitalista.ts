class Trabalhador {
    Nome: string; 
    Valor: number;
    Dia: number;
    Mes: number; 
    Ano: number;

    public constructor(nome: string, valor: number, dia: number, mes: number, ano: number) {
        this.Nome = nome; 
        this.Valor = valor; 
        this.Dia = dia;
        this.Mes = mes;
        this.Ano = ano;
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
    public Trabalhar(nomeTrabalhador: string, dia: number, mes: number, ano: number): number {
        const minSalario = 1; 
        const maxSalario = 100;     
        const ganhoDoDia =  Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario); 
            
        const trabalhador = new Trabalhador(nomeTrabalhador, ganhoDoDia, dia, mes, ano);
        this.ListaDeTrabalhadores.push(trabalhador)
        // logica para adicionar os dados na lista trabalhador 

        return ganhoDoDia;
    }
}

// instanciar a classe 
// const <nome_da_variavel> = new <nome_da_classe>


// passar como informacaoo 











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