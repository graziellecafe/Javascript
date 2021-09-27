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
    private ListaDeTrabalhadores: Array<Trabalhador>;

    public constructor() {
        this.ListaDeTrabalhadores = new Array<Trabalhador>()
    }

    public Trabalhar(nomeTrabalhador: string, dia: number, mes: number, ano: number): number {
        const minSalario = 1; 
        const maxSalario = 100;     
        const ganhoDoDia =  Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario); 
            
        const trabalhador = new Trabalhador(nomeTrabalhador, ganhoDoDia, dia, mes, ano);
        this.ListaDeTrabalhadores.push(trabalhador);

        return ganhoDoDia;
    }
    
    public CalculaValorDaCompra(): number { 
        const maxGastos = 50; 
        const minGastos = 100;  

        return Math.ceil(Math.random() * (maxGastos - minGastos) + minGastos);        
    }
}


// Transformar o projeto em projeto node, posso transformar direto 
// npm init ou npm package json
// utilizar o npm install ... typescript
// OLHAR KT! 









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