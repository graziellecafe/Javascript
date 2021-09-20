// Exercício 01  
//  Imprimir os múltiplos de 7 menores que 200.

let imprimeMutiplos = () => {
    for (i = 1; i<=200; i++){
        if (i % 7 === 0){
            console.log(i, '\n');
        }
    }
}

imprimeMutiplos();

// Exercício 02 
// Um engenheiro precisa fazer o grafico da função f (x) = x2+1 / x+2 .
// Para isto, ele quer criar um progrma que gere a tabela de pares ordenados (x, y) e, 
// em seguida, construa o gráfico a partir desta tabela. Vamos ajudá-lo na primeira parte desta tarefa, 
// construindo a tabela de pares ordenados. Para isto
// serão fornecidos como dados de entrada: o valor inicial de x,
// o valor final de x e o passo. Por exemplo, se x varia de 0.0 a
// 3.0 com paso 0.2, devemos gerar uma tabela com os seguintes
// valores de x: 0.0, 0.2, 0.4, 0.6, . . ., 2.6, 2.8, 3.0.

let graficoFuncao = (valorInicial, valorFinal, passo) => {
    let x = valorInicial;
    while (x <= valorFinal){
        let y = (x^2 + 1)/(x+2);
        console.log(`Valores de x: ${x}, Valores de y: ${y}`);
        x = x + passo; 
    }
}

graficoFuncao(0, 3, 0.2)


// Exercício 03 
// Dado um número inserido por teclado, calcule a soma dos pares e a soma dos ímpares de todos os números desde 0 até o número inserido. Por exemplo, seja n = 10:
// somaPares = 0 + 2 + 4 + 6 + 8 + 10
// somaImpares = 1 + 3 + 5 + 7 + 9

let soma = (numeroInserido) => {
    let somaPares = 0;
    let somaImpares = 0;
    for (let i = 0; i <= numeroInserido; i++){
        if (i % 2 === 0){
            somaPares = somaPares + i;
        }
        else{
            somaImpares = somaImpares + i;
        }
    }
    console.log(`Soma dos números pares: ${somaPares}`);
    console.log(`Soma dos números ímpares: ${somaImpares}`);
}

soma(10);