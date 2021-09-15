//  ----------- AULA 01: 21 de julho de 2021  ----------- //
//   -----------     Conceitos Básicos        ----------- //

// Ex. 01 - Dados a média final e a frequência de um aluno, 
// elaborar um programa para verificar se ele foi aprovado 
// ou reprovado. Um aluno só é aprovado se tiver média igual
// ou superior a 6.0 e frequência igual ou superior a 75%.

//  Resolução
function aprovacao(media, frequencia){
    if (media >= 6 && frequencia >= 75){
      console.log('Parabéns, você foi aprovado!');
    }
    else{
      console.log('Tente novamente :( ');
    }
  }
  
  aprovacao(6, 65)
  // Fim Resolução
  
  
  // ------------------------------------------------------------------------ // 
  
  
  // Ex. 02 - Dado um valor inteiro, elaborar um algoritmo para verificar se
  // o mesmo é múltiplo de 10.
  
  // **Dicas:**
  // % : resto da operação
  // === : utiliza-se para comparar o valor e o tipo da variável
  
  //  Resolução: 
  function multiplo(numero){
    if (numero % 10 === 0){
      console.log('O número digitado é multiplo de 10.');
    }
    else {
      console.log('Digite outro numero');
    }
  }
  multiplo(30)
  //  Fim Resolução
  
  
  // ------------------------------------------------------------------------ //
  
  // Ex. 03 - Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
  // e mostre seu peso ideal, utilizando as seguintes fórmulas:
  //  - para sexo masculino: peso ideal = (72.7 * altura) - 58
  //  - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
  
  // Resolução 
  function peso_ideal(nome, altura, sexo){
      if (sexo === 'M'){
          conta = (72.7 * altura) - 58;
          console.log(`Olá ${nome}! O seu peso ideial é ${conta}`);
      }
      if (sexo === 'F'){
          conta = (62.1 * altura) - 44.7
          console.log(`Olá ${nome}! O seu peso ideial é ${conta}`); 
      }
  }
  
  peso_ideal('Grazielle', 1.78, 'F');
  // Fim Resolução 