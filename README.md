# Javascript
Estudos de Javascript com a mentoria da Camila Tropia. 


# Laços de repetição 
**Switch Case** 
A condicional switch avalia uma expressão, combinando o valor da expressão para uma cláusula case, 
e executa as instruções associadas ao case. 

```
switch (exp){
    case 'Oranges': 
        console.log('Oranges are $0.59 a pound.');
        break; 
}
```

**do .. while**
```
let i = 0; 
do {
  console.log(i);
  i += 1; 
} while (i <= 5);
```

## forEach e map
Link da aula: https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=Cj0KCQjw4eaJBhDMARIsANhrQABBNkfAJ5iseJHPwP9zt6SmWl92hVRqoCHons5yiyr4cu3-Y8Okn-gaAnhlEALw_wcB
**for**
```
const nomes = ['Grazielle','Fagner','Camila','Andressa','Lucão'];

for(let i = 0; i<nomes.length; i++) {
    console.log('[for]', nomes[i]);
}
```
**forEach**
forEach percorre todos os itens de um array, tal como o loop for normal,
isso é porque internamente ele possui um loop for.
```
const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno forEach: ', retornoForEach);
```

**map**
```
const retornoMap = nomes.map((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno map: ', retornoMap);
```
Enquanto o forEach foi feito para ser uma alternativa ao loop for, o map foi feito para fazemos operação de transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base.

Caso queiramos somente uma forma mais elegante para trabalhar com o for usamos o .forEach e caso queiramos transformar/alterar valores ou mesmo concatenar operações em cima de arrays o .map é o mais indicado.

# Funções
Declaração da função no formato padrão
```
function fn(){
    return 'Code here';
}

console.log(fn());
```

Declaração no formato de arrow function
```
const arrowFunction = () => 'Code here using arrow function';
console.log(arrowFunction());
```

Declaração no formato de arrow function para mais de uma expressão: 
```
const arrowFunctionMoreExpressions = () => {
    return 'Code here for more expressions inside body';
}

console.log(arrowFunctionMoreExpressions()); 
```