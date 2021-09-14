// Exercício 01 
// Criar um programa para ler as letras inicias do estado civil e
// do sexo de uma pessoa e mostrar a descriçãao: Casado(a),
// Solteiro(a), Viúvo(a), Divorciado(s) ou Inválido. O caracter
// inserido pode ser maiúsculo ou minúsculo.

// Dica da aula: charAt() -- retorna o caracter de um index específico em uma string
// let estadoCivil = 'casado'; 

// function confereEstadoCivil (estadoCivil){
//     switch (estadoCivil.charAt(0)){
//         case 'c': case 'C':
//             console.log('Casado');
//             break;
//         case 's': case 'S':
//             console.log('Solteiro');
//             break;
//         case 'v': case 'V':
//             console.log('Viúvo');
//             break;
//         case 'd': case 'D':
//             console.log('Divorciado');
//             break;
//         default: 
//             console.log('Inválido');
//             break;
//     }
// }

// confereEstadoCivil(estadoCivil);


// Exercício 02 
// Uma empresa concederá um aumento de salário aos seus
// funcionários conforme a tabela abaixo. Faça um programa que
// leia o salário e o código do cargo de um funcionário e calcule
// o seu novo salário. Se o cargo do funcionário não estiver na
// tabela, ele deverá, então, receber 15 % de aumento. Mostre o
// salário antigo, o novo salário e a diferença entre ambos.
// Utilizar o comando switch

// 101 - 5% 
// 102 - 7.5% 
// 103 - 10% 
// function aumentoSalario (salario, codigo){
//     let novoSalario;
//     switch(codigo){
//         case 101:
//             novoSalario = salario + (salario*(5/100));
//             console.log(`Seu salário antigo é ${salario}, seu novo salário é ${novoSalario} e a diferença é ${novoSalario - salario}`);
//             break;
//         case 102:
//             novoSalario = salario + (salario*(7.5/100));
//             console.log(`Seu salário antigo é ${salario}, seu novo salário é ${novoSalario} e a diferença é ${novoSalario - salario}`);
//             break;
//         case 103:
//             novoSalario = salario + (salario*(10/100));
//             console.log(`Seu salário antigo é ${salario}, seu novo salário é ${novoSalario} e a diferença é ${novoSalario - salario}`);
//             break;
//         default:
//             novoSalario = salario + (salario*(15/100));
//             console.log(`Seu salário antigo é ${salario}, seu novo salário é ${novoSalario} e a diferença é ${novoSalario - salario}`);
//     }
// }

// aumentoSalario(1000, 108);


// Exercício 03 
// Em uma competição de ginástica olímpica a nota
// é determinada por um painel de quatro juízes. Cada um dos
// juízes atribui uma nota entre zero e dez para o desempenho
// do atleta. Para calcular a nota final, a nota mais alta e a nota
// mais baixa são descartadas e é calculado a média das duas
// notas restantes. Escreva um programa que leia 4 notas entre
// zero e dez e calcule a média após o descarte da maior e da menor nota.

// Dica: Função da biblioteca Math do Javascript que calcula o máximo ou mínimo -- Math.max | Math.min
// function notaOlimpiada (nota1, nota2, nota3, nota4){
//     let max = Math.max(nota1, nota2, nota3, nota4);
//     let min = Math.min(nota1, nota2, nota3, nota4);

//     if ((max === nota1 || min === nota1) && (max === nota2 || min === nota2)){
//         console.log(`A nota final é ${(nota3 + nota4)/2}`);
//     }

//     if ((max === nota1 || min === nota1) && (max === nota3 || min === nota3)){
//         console.log(`A nota final é ${(nota2 + nota4)/2}`);
//     }

//     if ((max === nota1 || min === nota1) && (max === nota4 || min === nota4)){
//         console.log(`A nota final é ${(nota2 + nota3)/2}`);
//     }

//     if ((max === nota2 || min === nota2) && (max === nota3 || min === nota3)){
//         console.log(`A nota final é ${(nota1 + nota4)/2}`);
//     }

//     if ((max === nota2 || min === nota2) && (max === nota4 || min === nota4)){
//         console.log(`A nota final é ${(nota1 + nota3)/2}`);
//     }

//     if ((max === nota3 || min === nota3) && (max === nota4 || min === nota4)){
//         console.log(`A nota final é ${(nota1 + nota2)/2}`);
//     }
// } 

// notaOlimpiada(3, 5, 1, 9)


// Exercício 04
// Dado o valor do salário bruto de um empregado, elaborar um
// programa para calcular o valor pago ao Imposto de Renda de
// acordo com a tabela abaixo. Exibir o valor da alíquota, o valor
// da parcela a deduzir, o valor do imposto pago e o salário liquido.

// Imposto = Alíquota * Salário Bruto - Parcela a Deduzir
// Salário Liquido = Salário Bruto - Imposto

// Faixa Salarial ($)  --- Aliquota (%) --- Parcela Deduzida($)
//     Até 900                0                 0
//    900,01 a 1500          10                 90
//    1500,01 a 2500         20                240
//    2500,01 a 4000         30                490
//    Acima de 4000          40                890

function impostoDeRenda (salarioBruto){
    let aliquota;
    let parcela;

    if(salarioBruto <= 900){
        aliquota = 0;
        parcela = 0;
    }
    else if(salarioBruto > 900 && salarioBruto <= 1500){
        aliquota = 10/100;
        parcela = 90;
    }
    else if(salarioBruto > 1500 && salarioBruto <= 2500){
        aliquota = 20/100;
        parcela = 240;
    }
    else if(salarioBruto > 2500 && salarioBruto <= 4000){
        aliquota = 30/100;
        parcela = 490;
    }
    else if(salarioBruto > 4000){
        aliquota = 40/100;
        parcela = 890;
    }

    let imposto = aliquota * salarioBruto - parcela;
    let salarioLiquido = salarioBruto - imposto;
    console.log(`Aliquota: ${aliquota} \n Parcela a deduzir: ${parcela} \n Valor do Imposto: ${imposto} \n Salário Líquido: ${salarioLiquido}`);
}

impostoDeRenda(5000);