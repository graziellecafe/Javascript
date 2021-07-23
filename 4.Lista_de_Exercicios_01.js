// Tema: Controle de Fluxo
//       Comandos de Decisão

// function notas(nota1,nota2){
//     media = (nota1 + nota2)/2;
//     if(media >= 9 && media <= 10){
//         console.log(`Sua média foi ${media} e seu conceito foi A. Parabéns!`);
//     }
//     if(media < 9 && media >= 7.5){
//         console.log(`Sua média foi ${media} e seu conceito foi B. Muito bem!`);
//     }
//     if(media < 7.5 && media >= 6){
//         console.log(`Sua média foi ${media} e seu conceito foi C. OK!`);
//     }
//     if(media < 6 && media >= 4 ){
//         console.log(`Sua média foi ${media} e seu conceito foi D. Precisa melhorar.`);
//     }
//     if(media < 4 && media >= 0 ){
//         console.log(`Sua média foi ${media} e seu conceito foi E. Vamos estudar mais?`);
//     }
// }

// notas(3, 2)


// ---------------- Exercício 02 ----------------------//
// Faça um programa em C++ que leia um numero e exiba o dia
// correspondente da semana. (1-Domingo, 2- Segunda, etc.), se
// digitar outro valor deve aparecer valor inválido.

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


