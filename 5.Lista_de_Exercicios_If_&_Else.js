//   ----------- Lista de Exercícios: If e Else ----------- //

// Ex. 01 - Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.
// Resolução
function verifica_alfabeto(letra){
    console.log('Digite a letra a ser conferida em maiúsculo.')
    if(letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U' )
        console.log('A letra digitada é uma vogal.');        
    else
        console.log('A letra digitada é uma consoante.')
}

verifica_alfabeto('a');
// Fim Resolução