/* 
Exercício 01: Uma companhia de pulverização utiliza aviões para pulverizar lavouras. Os custos de pulverização dependem do tipo de praga e da área contratada, conforme o esquema: 

Tipo 1. pulverização contra ervas daninhas. R$50,00 por acre;
Tipo 2. pulverização contra gafanhotos. R$100,00 por acre; 
Tipo 3. pulverização contra broca. R$150,00 por acre; 
Tipo 4. pulverização contra tudo acima, R$250,00 por acre. 

*/

alert('Sistema de Pulverização');
const tipoPulverizacao = prompt('Digita o tipo de pulverização');


switch (tipoPulverizacao) {
    case '1':
        console.log('Pulverização contra ervas daninhas. $50,00 por acre.');
    case '2':
        console.log('Pulverização contra gafanhotos. R$100,00 por acre.');
    case '3':
        console.log('Pulverização contra broca. R$150,00 por acre.');
    case '4':
        console.log('Pulverização contra todos os tipos. R$250,00 por acre.');
}

