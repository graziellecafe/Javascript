# Javascript
Estudos de Javascript através da:
- Mentoria da Camila Trópia; 
- Curso Introdução ao ES6 da Digital Innovation One; 
- Curso Objetos e Arrays da Alura. 

# História e Conceitos do Javascript
## ECMAScript
### O que é o ECMAScript 6
ECMAScript 6, ou ECMAScript 2015 é somente a padronização da linguagem Javascript. Esta versão lançada no mercado
em 2015, foi um divisor de águas na evolução desta linguagem de programação, trazendo recursos e funcionalidades como novas maneiras de iterar objetos, declaração de variáveis com let e const e modularização de classes. 

Criado pelo Brendan Eich, antigo funcionário da Netscape que criou uma linguagem de programação baseada em scripts, de forma a trazer mais vida ao HTML. 

O ECMAScript é uma padronização da linguagem. 

Novas features com o ECMA6: 
* Funções *arrow*; 
* Funções *map*, *filter* e *reduce*; 
* Funções *some* e *every*; 
* Função *find*; 
* Comandos *const* e *let*, entre outros. 

Processo de adição de novas features no JS: https://github.com/tc39

### ES2018
Novas features como: 

* Operadores rest/spread; 
* Iteração assíncrona; 
* Promise.prototype.finally().


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