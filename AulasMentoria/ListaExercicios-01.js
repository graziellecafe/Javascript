/* 
                                    Exercício 02
Preparar um algoritmo que imprima a soma dos quadrados dos 100 primeiros numeros inteiros 
*/

function somaQuadrados() { 
    let soma = 0; 

    for(let numeroAtual = 0; numeroAtual <= 100; numeroAtual++) {
        soma = soma + numeroAtual**2; 
    }
    console.log(`A soma dos quadrados dos 100 primeiros números inteiros é igual a ${soma}`);
}
 
somaQuadrados();

/*                                      
                                    Exercício 04 
Uma cidade classifica o ar baseado em um índice de poluição, de acordo com os seguintes índices:

- IP < 35, bom 
- 35 <= IP < 50, atenção 
- 51 <= IP < 75, perigoso
- 75 <= IP <= 100, emergência

O algoritmo deve ler do teclado o valor do IP e imprimir uma mensagem indicando a respectiva classificação
*/ 


// Declaração da função no formato padrão
function fn(){
    return 'Code here';
}

console.log(fn());

// Declaração no formato de arrow function
const arrowFunction = () => 'Code here using arrow function';
console.log(arrowFunction());

// Declaração no formato de arrow function para mais de uma expressão: 
const arrowFunctionMoreExpressions = () => {
    return 'Code here for more expressions inside body';
}

console.log(arrowFunctionMoreExpressions());


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