# Javascript
Estudos de Javascript através da:
- Mentoria da Camila Trópia e Fagner Bernardo (**dti digital**); 
- Curso Introdução ao ES6 da plataforma **Digital Innovation One**; 
- Cursos sobre Fundamentos, Objetos e Arrays da plataforma **Alura**. 

# Algoritmos
Algoritmos são sequências de passos que seguimos com a intenção de atingir um objetivo. 

Exemplo: atravessar a rua, fazer um bolo, definir com clareza ou definir qual critério usar para aprovar ou reprovar um aluno. 

No desenvolvimento de um algoritmo, devemos definir com clareza e forma precisa o conjunto de regras ou instruções que serão utilizadas para resolver aquele problema em específico. 

A *lógica de programação*, é onde aplicamos todos os conceitos de algoritmo, a definição do passo-a-passo e transferimos toda a lógica do algoritmo desenvolvido para uma linguagem de programação. Uma linguagem de programação é um meio estruturado para passar instruções para a máquina. 

Exemplos de linguagem de programação: C, Java, PHP, Python, Javascript, entre outras. Cada uma delas tem suas características, particularidades e cenários de aplicação. 
# História: ECMAScript
**ECMAScript 6**
*ECMAScript 6*, ou *ECMAScript 2015* é somente a padronização da linguagem Javascript. Esta versão lançada no mercado
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

**ES2018**
Novas features como: 

* Operadores rest/spread; 
* Iteração assíncrona; 
* Promise.prototype.finally().

# Tipos de Linguagem
## Linguagem interpretada
O código no Javascript é executado de cima para baixo e o resultado dessa execução no código é imediatamente retornado. 

## Linguagem compilada
Precisa passar por um processo antes de ser executado, de transformação de arquivos para execução. Exemplo: C e C++ que são compilados em linguagem Assembly e posteriormente executados pelo computador. 


# Tipos de Tipagem
O JavaScript é uma linguagem de *tipagem fraca e dinâmica* ou seja, não há verificação de todas as operações no JavaScript, ou seja, é possível utilizar o operador de '+' em um número e uma string sem que haja um erro. 

Utilizando o operador '+' como ação de concatenar um número e uma string:

```
var meuNumero = 20; 
var meuTexto = 'Exemplo'; 

console.log(meuNumero + meuTexto);

// Saída: '20Exemplo'
```

Python por exemplo é uma linguagem de *tipagem forte*, portanto ao realizar o mesmo código acima é exibido no terminal a não possibilidade de 'soma' entre um número e uma string. *unsupported operand type(s) for +: 'int' and 'str'.

Código em Python: 
```
meu_numero = 30; 
meu_texto = 'Exemplo'; 
print(meu_numero + meu_texto);
```

O JavaScript também é definido pela *tipagem dinâmica*, ou seja, você não precisa declarar o tipo de dado que será armazenado na variável, trazendo uma maior flexibilidade na escrita do código, mas podendo trazer problemas como erros por redeclaração da mesma variável com valor de outro tipo. 

Exemplo: 
```
var minhaVariavel = 10; 
 
minhaVariavel = 'Texto'; 

console.log(minhaVariavel);

// Saída: Texto
```

Já em *tipagem estática*, é obrigatório a declaração do tipo de dado que a variável irá receber, antes de atribuir valor a ela. 

# Conceitos
## Variáveis
Armazenamos os nossos dados em variáveis.

## Tipos de Dados
Para que um programa execute de forma correta, ele precisa receber dados corretos. 

Exemplo: números para fazer contas, textos para exibir um nome, guardar um nome num banco de dados, etc. 

## Operadores
Exemplo: realizar a comparação para verificar se dois dados são iguais. A senha 'imputada' é igual a senha que está no banco?

## Funções
As funções são peças chaves para que nosso programa se comporte da maneira que queiramos. E elas também servem para isolar algumas partes do código, além de reaproveitar e organizar melhor nosso código. 
### Funções de primeira classe e ordem maior
A função pode ser atribuida a uma variável, pode ser atribuida a uma estrutura de dados (seja um object ou um array) e pode ser passada por outro argumento ou até mesmo ser passada para outras funções. 

Exemplo: 
```
// Declarando uma função: 
function getName(){
    return 'Grazielle Amanda do Carmo Café';
}

console.log(getName());
// Saída: Grazielle Amanda do Carmo Café



// Passando a função para uma constante e chamando uma função dentro de outra
function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn; 
logFnResult(getName);
```

### Declaração de funções
#### Formato padrão
*Declaração da função no formato padrão*
```
function fn(){
    return 'Code here';
}


console.log(fn());
```

#### Arrow Function
*Declaração no formato de arrow function*
```
const arrowFunction = () => 'Code here using arrow function';
console.log(arrowFunction());
```

*Declaração no formato de arrow function para mais de uma expressão*
```
const arrowFunctionMoreExpressions = () => {
    return 'Code here for more expressions inside body';
}

console.log(arrowFunctionMoreExpressions());
```


## Condicionais
### Switch Case
A condicional switch avalia uma expressão, combinando o valor da expressão para uma cláusula case, 
e executa as instruções associadas ao case. 

```
switch (exp){
    case 'Oranges': 
        console.log('Oranges are $0.59 a pound.');
        break; 
}
```


## Laços de repetição 
## #While 
Estrutura condição while
```
while (condição) {
    rotina
}
```

*Exemplo*
```
var n = 0;
var x = 0;

while (n < 3) { 
    n++; 
    x += n; 

    console.log('O valor de n é:', n);
    console.log('O valor de x é:', x);
}
```

## Do ... While 
```
let i = 0; 

do {
    console.log(i);
    i += 1; 
} while (i <= 5);
```

## forEach e map
Link da aula: https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=Cj0KCQjw4eaJBhDMARIsANhrQABBNkfAJ5iseJHPwP9zt6SmWl92hVRqoCHons5yiyr4cu3-Y8Okn-gaAnhlEALw_wcB
### for
```
const nomes = ['Grazielle','Fagner','Camila','Andressa','Lucão'];

for(let i = 0; i<nomes.length; i++) {
    console.log('[for]', nomes[i]);
}
```

### forEach
forEach percorre todos os itens de um array, tal como o loop for normal,
isso é porque internamente ele possui um loop for.
```
const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno forEach: ', retornoForEach);
```

### map
```
const retornoMap = nomes.map((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno map: ', retornoMap);
```
Enquanto o forEach foi feito para ser uma alternativa ao loop for, o map foi feito para fazemos operação de transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base.

Caso queiramos somente uma forma mais elegante para trabalhar com o for usamos o .forEach e caso queiramos transformar/alterar valores ou mesmo concatenar operações em cima de arrays o .map é o mais indicado.


# Typescript
O Typescript é um **superset** do JavaScript. Além dele conseguir adicionar tipos, ele adiciona funcionalidades que o JavaScript não tem. É possível adicionar interfaces, enum, tipos genéricos, etc. 

*Site Typescript*: https://www.typescriptlang.org/

# NodeJS
## Definição
O Node.JS pode ser definido como um ambiente de execução Javascript *server-side*, ou seja, do lado do servidor. Isso significa que o Node.js é possível criar aplicações Javascript para rodar como uma aplicação *standalone* (ou seja, programas autossuficientes) em uma máquina, não dependendo de um browser para a execução, diferente de uma aplicação de Angular, React que dependem do browser.

## Arquitetura
Baseado na arquitetura **event-driven**. Esta arquitetura é um paradigma de software que promove a produção, detecção, consumo e reação a evento, sendo esses eventos podendo ser definidos como uma "mudança significativa no estado". Ou seja, o que é produzido, publicado, propagado, detectado ou consumido é uma mensagem, tipicamente assíncrona, ou seja, uma notificação do evento. Os eventos não transitam, eles apenas ocorrem. 

Ou seja, o Node.JS reage a eventos, mas baseado nas notificações de evento.  Se uma requisição é realizada pela API, ela recebeu uma mensagem de que um evento aconteceu. 

A arquitetura interna, a **event-driven** vai criar mecanismos para lidar com este evento recebido através da mensagem.

## Compilação (?) e execução
O Javascript por si só é uma linguagem de programação **interpretada**, e não **compilada**. Entretanto, o Node.JS tem um interpretador de código JavaScript, o V8, também chamado de máquina virtual, ou engine. O V8 foi desenvolvido pela Google, e utiliza seu navegador (Google Chrome). Foi escrito na linguagem C++ e distribuída no regime de código aberto.

Ou seja, recebe o código em JavaScript e realiza um processo de compilação real, para a linguagem de máquina. 
Ex: Compila na linguagem de máquina nativa do Windows. 

O fato de voce ter um código compilado, rodando na sua máquina, dá um ganho de desempenho absurdo, pois não estamos mais partindo da premissa da interpretação do código, já vamos ter toda a estrutura de um arquivo executável que ocorre naturalmente nas máquinas, como por exemplo os registradores do processador, o contador de programa e todo aquele fluxo que faz com que você tenha muita experiência na hora de executar um programa compilado. 

## Vantagens
* O principal objetivo de sua adoção é a *alta capacidade de escala*; 
* Arquitetura; 
* Flexibilidade; 
* Baixo custo, o que o torna uma boa escolha para implementação de [microsserviços](https://www.opus-software.com.br/micro-servicos-arquietura-monolitica/) e componentes da arquitetura [serveless](https://www.opus-software.com.br/serverless-applications/)
* Tem um dos maiores ecossistemas do mundo (muitas bibliotecas disponíveis)

## npm 
O *npm* é o Gerenciador de Pacotes do Node (Node Package Manager). 

O *npm* funciona baseado em dois ofícios: 
* É um repositório amplamente usado para a publicação de projetos Node.JS de código aberto (open-source). Isso significa que ele é uma plataforma online onde qualquer pessoa pode publicar e compartilhar ferramentas escritas em Javascript.