//              Exercício 01         //
// Ex. Escreva um programa que lˆe o valor de venda de um vendedor
// e calcula seu prêmio (10% do valor de venda). Se o valor do
// prêmio for maior do que 2000, o programa imprime uma
// mensagem de congratulação

// function premio(valor_venda){
//     let valor_final = valor_venda + (valor_venda * 0.1);
//     console.log(valor_final);

//     if (valor_final > 2000){
//         console.log('VOCE É RYCAAA!');
//     }
//     else {
//         console.log('PERDEU tururu')
//     }
// }

// premio(1950)



// ----------------- EXERCÍCIO 02 ----------------- //
// Fa¸ca um algoritmo que leia os valores A, B, C e imprima na tela
// se a soma de A + B ´e menor que C ou maior igual.

// function comparacao(A,B,C){
//     if((A + B) < C){
//         console.log('A soma entre A+B é menor que C');
//     }
//     if ((A + B) >= C){
//         console.log('A soma entre A+B é maior ou igual a C');
//     }
// }

// let A = 10; 
// let B = 2; 
// let C = 14; 
// comparacao(A,B,C)


// ----------------- EXERCÍCIO 03 ----------------- //
// Ler quatro notas escolares de um aluno e imprimir uma mensagem
// dizendo que o “aluno foi aprovado” se o valor da m´edia escolar for
// maior ou igual a 7,0. Se a media for entre 5,0 e 6,9 `a mensagem
// deve aparecer como “Esta em Recupera¸c˜ao” e se a m´edia for
// inferior a 5.0 o “aluno esta reprovado”.

function notaFinal (N1,N2,N3,N4){
    nota_aluno = (N1 + N2 + N3 + N4)/4;
    if(nota_aluno > 7){
        console.log('Parabéns, você foi aprovado!');
    }
    else if(nota_aluno >= 5 && nota_aluno <= 6.9){
        console.log('Você está em recuperação, estuda que vai!');
    }
    else {
        console.log('Você foi reprovado');
    }
}

notaFinal(7,7,7,7.5)