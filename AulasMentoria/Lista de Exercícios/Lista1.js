/* 
Exercício 01: Uma companhia de pulverização utiliza aviões para pulverizar lavouras. Os custos de pulverização dependem do tipo de praga e da área contratada, conforme o esquema: 

Tipo 1. pulverização contra ervas daninhas. R$50,00 por acre;
Tipo 2. pulverização contra gafanhotos. R$100,00 por acre; 
Tipo 3. pulverização contra broca. R$150,00 por acre; 
Tipo 4. pulverização contra tudo acima, R$250,00 por acre. 
*/

// function pulverizarLavouras (tipoDePraga, areaContratada){
//     if(areaContratada >= 100){

//     }




// -------------------------------------------------------------------------------------------------//
/* 
Exercício 02: Preparar um algoritmo que imprima a soma dos quadrados dos 100 primeiros numeros inteiros 
*/

function somaQuadrados() { 
    let soma = 0; 

    for(let numeroAtual = 0; numeroAtual <= 100; numeroAtual++) {
        soma = soma + numeroAtual**2; 
    }
    console.log(`A soma dos quadrados dos 100 primeiros números inteiros é igual a ${soma}`);
}
 
somaQuadrados();



// -------------------------------------------------------------------------------------------------//
/*                                      
Exercício 04: Uma cidade classifica o ar baseado em um índice de poluição, de acordo com os seguintes índices:

- IP < 35, bom 
- 35 <= IP < 50, atenção 
- 51 <= IP < 75, perigoso
- 75 <= IP <= 100, emergência

O algoritmo deve ler do teclado o valor do IP e imprimir uma mensagem indicando a respectiva classificação
*/ 

// Resolução do exercício utilizando arrow function
const classificacaoDoAr = (IP) => {
    if (IP < 35){
        return 'Bom';
    }
    if (IP >= 35 && IP < 50) {
        return 'Atenção';
    }
    if (IP >= 51 && IP < 75) {
        return 'Perigoso';
    }
    if (IP >= 75 && IP <= 100) {
        return 'Emergência';
    }
}

console.log(classificacaoDoAr(51));