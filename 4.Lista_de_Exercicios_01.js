// //  ----------- AULA 02: 23 de julho de 2021  ----------- //
// //   ----------- Primeira Lista de Exercícios ----------- //

// Ex. 01 - Atribuição de conceito a notas
// Resolução
function notas(nota1,nota2){
    media = (nota1 + nota2)/2;
    if(media >= 9 && media <= 10){
        console.log(`Sua média foi ${media} e seu conceito foi A. Parabéns!`);
    }
    if(media < 9 && media >= 7.5){
        console.log(`Sua média foi ${media} e seu conceito foi B. Muito bem!`);
    }
    if(media < 7.5 && media >= 6){
        console.log(`Sua média foi ${media} e seu conceito foi C. OK!`);
    }
    if(media < 6 && media >= 4 ){
        console.log(`Sua média foi ${media} e seu conceito foi D. Precisa melhorar.`);
    }
    if(media < 4 && media >= 0 ){
        console.log(`Sua média foi ${media} e seu conceito foi E. Vamos estudar mais?`);
    }
}

notas(3, 2)
// // Fim Resolução


// // Ex. 02 - Faça um programa em C++ que leia um numero e exiba o dia
// // correspondente da semana. (1-Domingo, 2- Segunda, etc.), se
// // digitar outro valor deve aparecer valor inválido.

let dia = 8; 

    switch(dia){
        case 1: 
            console.log('O dia da semana é: Domingo');
            return;
        case 2: 
            console.log('O dia da semana é: Segunda');
            return;
        case 3: 
            console.log('O dia da semana é: Terça');
            return;
        case 4: 
            console.log('O dia da semana é: Quarta');
            return;
        case 5: 
            console.log('O dia da semana é: Quinta'); 
            return; 
        case 6: 
            console.log('O dia da semana é: Sexta');
            return;
        case 7: 
            console.log('O dia da semana é: Sábado');
            return;
        default:
            console.log('Digite um valor entre 1 - 7');
            return;
    }
// Fim Resolução


// Ex. 03 - Elabore um programa em C++ que calcule o que deve ser
// pago por um produto, considerando o preço normal de
// etiqueta e a escolha da condição de pagamento. Utilize os
// códigos da tabela a seguir para ler qual a condição de
// pagamento escolhida e efetuar o cálculo adequado.

// Resolução
function pagamento(codigo, valor){
    if ( codigo === 1){
        console.log('Seu pagamento será em dinheiro ou cheque.');
        let valorAPagar = valor - (valor*0.1);
        console.log(`O valor a ser pago será: $${valorAPagar}`);
    }
    if ( codigo === 2){
        console.log('Seu pagamento será a vista no cartão de credito.');
        let valorAPagar = valor - (valor*0.15);
        console.log(`O valor a ser pago será: $${valorAPagar}`);
    }
    if ( codigo === 3){
        console.log('Seu pagamento será em duas vezes.');
        let valorParceladoAPagar = valor/2;
        console.log(`O valor total a ser pago será: $${valor} de 2 parcelas de $${valorParceladoAPagar}`);
    }
    if ( codigo === 4){
        console.log('Seu pagamento será em duas vezes com acréscimo de 10%.');
        let valorAPagar = (valor+(valor*0.1));
        let valorParceladoAPagar = valorAPagar/2;
        console.log(`O valor total a ser pago será: $${valorAPagar} de 2 parcelas de $${valorParceladoAPagar}`);
    }
}

pagamento(4,200);

// Ex. 04 - Uma pessoa possui R$ 60,00 reais em sua carteira (10 notas
// de R$ 1,00 e 10 notas de R$ 5,00) para pagar uma compra
// feita no supermercado. Dado o valor (inteiro) de sua compra,
// elaborar um programa para calcular e exibir a quantidade
// mínima de notas necessárias para pagar a compra. O
// programa deve exibir a quantidade de notas de R$ 1,00 e a
// quantidade de notas de R$ 5,00. Se o valor da compra for
// superior a R$ 60,00, o programa deve exibir uma mensagem
// de erro.

// Resolução 
function compraSupermercado(valorCompra){

    if(valorCompra < 60){
        console.log('Você tem dinheiro para pagar a compra! uhu! ');
        console.log('Use a seguinte quantidade de notas: ');

        let notasDeDezReais = Math.floor(valorCompra/10);
        console.log(`Notas de dez: ${notasDeDezReais}`);

        let notasDeUmReal = valorCompra - (notasDeDezReais*10);
        console.log(`Notas de um: ${notasDeUmReal}`);
    }

    if (valorCompra === 60){
        console.log('Use todo o seu dinheiro :)');
    }

    if(valorCompra > 60){
        console.log('Volte um produto! Você não tem dinheiro suficiente!')
    }
}

compraSupermercado(62);
// Fim Resolução