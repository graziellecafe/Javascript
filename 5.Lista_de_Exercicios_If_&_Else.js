//   ----------- Lista de Exercícios: If e Else ----------- //

// Ex. 01 - Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.
// // Resolução
// function verifica_alfabeto(letra){
//     console.log('Digite a letra a ser conferida em maiúsculo.')
//     if(letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U' )
//         console.log('A letra digitada é uma vogal.');        
//     else
//         console.log('A letra digitada é uma consoante.')
// }

// verifica_alfabeto('a');
// // Fim Resolução

// Ex. 02 - Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
    // A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    // A mensagem "Reprovado", se a média for menor do que sete;
    // A mensagem "Aprovado com Distinção", se a média for igual a dez.

// Resolução
function nota_final(nota1, nota2){
    let media = (nota1 + nota2)/2;

    if (media >= 7 && media < 10)
        console.log('APROVADO!');
    if (media < 7)
        console.log('REPROVADO! :( ');
    if (media === 10)
        console.log('APROVADO COM DISTINÇÃO!! ');
}

nota_final(9,9)
// Fim Resolução