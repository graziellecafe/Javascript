/* 
Qualquer método relacionado a uma ação social. 
Ex.: doar uma cesta básica, doar dinheiro, visitar idosos no asilo
*/
import { Pessoa } from "../entities/Pessoa"

class Doador {
    Nome: string; 
    Valor: number;

    public constructor(nome: string, valor: number) {
        this.Nome = nome; 
        this.Valor = valor;
    }
}

export class AcaoSocial {
    private ListaDeDoadores: Array<Doador>;

    public constructor() {
        this.ListaDeDoadores = new Array<Doador>();
    }

    public RealizarDoacaoParaCaridade(nomeDoador: string,valorDoado: number): void {
        const doacaoRecebida = new Doador(nomeDoador, valorDoado);     
        this.ListaDeDoadores.push(doacaoRecebida);

        
    }
}

// Javascript
// const lista = [{
//     nome: '', 
//     valor: 0,
// }]