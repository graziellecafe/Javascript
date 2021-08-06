// Exemplo 01 
// let calcula = (num1, num2) => {
//     let media = (num1+num2)/2;
//     console.log(`A média dos valores é ${media}`);
// }

// calcula (2,4)

// Exemplo 02
let impostoDeRenda = (salarioBruto) => {
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
    console.log(' ------- \n')
    console.log(` Aliquota: ${aliquota} \n Parcela a deduzir: ${parcela} \n Valor do Imposto: ${imposto} \n Salário Líquido: ${salarioLiquido}`);
}

impostoDeRenda(5000);