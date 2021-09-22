# Javascript
Estudos de Javascript através da:
- Mentoria da Camila Trópia e Fagner Bernardo (**dti digital**); 
- Curso Introdução ao ES6 da plataforma **Digital Innovation One**; 
- Cursos sobre Fundamentos, Objetos e Arrays da plataforma **Alura**. 

# Algoritmos
Algoritmos são sequências de passos que seguimos com a intenção de atingir um objetivo. 

**Exemplos**: atravessar a rua, fazer um bolo, definir com clareza ou definir qual critério usar para aprovar ou reprovar um aluno. 

No desenvolvimento de um algoritmo, devemos definir com clareza e forma precisa o conjunto de regras ou instruções que serão utilizadas para resolver aquele problema em específico. A **lógica de programação**, é onde aplicamos todos os conceitos de algoritmo, a definição do passo-a-passo e transferimos toda a lógica do algoritmo desenvolvido para uma linguagem de programação. Uma linguagem de programação é um meio estruturado para passar instruções para a máquina. 

**Exemplos de linguagem de programação**: C, Java, PHP, Python, Javascript, entre outras. Cada uma delas tem suas características, particularidades e cenários de aplicação. 
# História: ECMAScript
**ECMAScript 6**, ou **ECMAScript 2015** é somente a padronização da linguagem Javascript. Esta versão lançada no mercado em 2015, foi um divisor de águas na evolução desta linguagem de programação, trazendo recursos e funcionalidades como novas maneiras de iterar objetos, declaração de variáveis com let e const e modularização de classes. 

Criado pelo Brendan Eich, antigo funcionário da Netscape que criou uma **linguagem de programação baseada em scripts**, de forma a trazer mais vida ao HTML. 

O ECMAScript é uma padronização da linguagem. 

Novas features com o ECMA6: 
* Funções *arrow*; 
* Funções *map*, *filter* e *reduce*; 
* Funções *some* e *every*; 
* Função *find*; 
* Comandos *const* e *let*, entre outros. 

[Processo de adição de novas features no JS] (https://github.com/tc39)

**ES2018**
Novas features como: 

* Operadores rest/spread; 
* Iteração assíncrona; 
* Promise.prototype.finally().

# Padrões de Projeto
## Pascal Case e camel Case 
### Pascal Case
Todas as palavras são iniciadas com a primeira letra maiúscula, seja para: variáveis, propriedades, nomes de métodos e afins. 

**Práticas de Projeto:**: Método Público

### camel Case
Todas as palavras são iniciadas com a primeira letra em maiúscula, exceto a primeira palavra, seja para: variáveis, propriedades, nomes de métodos e afins. 

**Práticas de Projeto:** Método Privado
# Estrutura de dados do Javascript
Tipos de dados disponíveis na linguagem JavaScript e que propriedades eles possuem. 

## Linguagem e Tipagem
### Linguagem interpretada
O código no JavaScript é executado de cima para baixo e o resultado dessa execução no código é imediatamente retornado. 

### Linguagem compilada
Precisa passar por um processo antes de ser executado, de transformação de arquivos para execução. Exemplo: C e C++ que são compilados em linguagem Assembly e posteriormente executados pelo computador. 


### Tipagem fraca | forte & dinâmica | estática 
O JavaScript é uma linguagem de **tipagem fraca e dinâmica** ou seja, não há verificação de todas as operações no JavaScript, ou seja, é possível utilizar o operador de '+' em um número e uma string sem que haja um erro. 

Utilizando o operador '+' como ação de concatenar um número e uma string:

```
var meuNumero = 20; 
var meuTexto = 'Exemplo'; 

console.log(meuNumero + meuTexto);

// Saída: '20Exemplo'
```

Python por exemplo é uma linguagem de **tipagem forte**, portanto ao realizar o mesmo código acima é exibido no terminal a não possibilidade de soma entre um número e uma string. 

Terminal: *unsupported operand type(s) for +: 'int' and 'str'*.

Código em Python: 
```
meu_numero = 30; 
meu_texto = 'Exemplo'; 
print(meu_numero + meu_texto);
```

O JavaScript também é definido pela **tipagem dinâmica**, ou seja, você não precisa declarar o tipo de dado que será armazenado na variável, trazendo uma maior flexibilidade na escrita do código, mas podendo trazer problemas como erros por redeclaração da mesma variável com valor de outro tipo. 

Exemplo: 
```
var minhaVariavel = 10;
minhaVariavel = 'Texto'; 

console.log(minhaVariavel);
// Saída: Texto
```

Já em **tipagem estática**, é obrigatório a declaração do tipo de dado que a variável irá receber, antes de atribuir valor a ela. 


## Variáveis
Quando um programa precisa reter um valor para uso futuro, ele atribui o valor (ou 'armazena' o dado em) uma variável. As variáveis tem **nome** e permitem o uso desses nomes em nossos programas para se referir a valores. 

Exemplo: 
```
    const meuNumero = 3;
```

Ou seja, a variável *meuNumero* é nome que usamos para identificar um espaço na memória, que guarda um dado específico e esse dado é um dado do tipo número e o valor dele é 3. 

## Tipos de Dados
Para que um programa execute de forma correta, ele precisa receber dados corretos. 

Exemplo: números para fazer contas, textos para exibir um nome, guardar um nome num banco de dados, etc. 

Os **tipos** de Javascript podem ser divididos em duas categorias: **tipos primitivos** e **tipos de objetos**. 
### Tipos Primitivos
Temos três tipos principais, que são os primitivos: 
* Tipo *number*; 
* Tipo *string*;
* Tipo *boolean*. 

### Tipo Number
**Obs.**: Divisão por zero no Javascript não aponta como um erro
```
var a = 10
var b = 0
console.log(a/b) // Infinity
```

```
var a = 0
var b = 0
console.log(a/b) // NaN
```

### Tipo String
Usamos no JavaScript para guardar qualquer tipo de texto, ou seja, tudo que não for número ou não for booleano.

**Exemplo**: guardar caracteres, como por exemplo, do alfabeto. 

Tudo que colocarmos entre aspas o JavaScript vai considerar como uma string.

Exemplo: 
```
    const senha = 'senhaSuperSegura456!';
```

String de uma cadeia de caracteres:
```
    const stringDeNumeros = '345218';
```

#### Codificação de strings
*Character enconding*: Nas últimas décadas foram desenvolvidos diversos conjuntos de caracteres especiais, cada um com seus próprios códigos, para que pessoas que escrevem e leem em linguagens diferentes do inglês pudessem utilizar computadores com seus próprios idiomas. 

**Diversos conjuntos de caracteres**: 
* Western; 
* Latin-US; 
* Japanese; 
* ASCII (American Standard Code for Information Interchange), e português, Código Padrão Americano para o Intercâmbio de Informações.

O padrão utilizado pela *web* hoje é o **UTF** (de *Unicode Transformation Format* ou 'formato de conversão de unicode'). O Unicode tem códigos específicos para 'cifrar' e 'decifrar' caracteres de mais de 150 idiomas antigos e mordernos, e também diversos outros conjuntos de caracteres como símbolos matemáticos e inclusive *emojis*. 

Exemplo: 
```
const cifrao = '\u0024'
console.log(cifrao)
```

O Javascript usa, por padrão, o UTF-16. O número 16 está relacionado ao espaço em bits ocupados por cada caractere, 16 neste caso. 

#### Trabalhando com strings


# Instruções e declarações
Aplicações em JavaScript são realizadas através de instruções com uma sintaxe apropriada. Uma única instrução pode abranger múltiplas linhas. Múltiplas instruções pode abranger múltiplas linhas.

## Controle de fluxo
### break 
Termina o atual loop (switch), troca, ou nomeia instruções e transfere o controle do programa para a próxima instrução após a que foi terminada. 

### continue 
Termina a execução das instruções na atual iteração do atual loop, e continua a execução do loop com a seguinte interação. 
### switch
A condicional switch avalia uma expressão, combinando o valor da expressão para uma cláusula case, e executa as instruções associadas ao case. 

```
switch (exp){
    case 'Oranges': 
        console.log('Oranges are $0.59 a pound.');
        break; 
}
```
## Iterações
### for
```
const nomes = ['Grazielle','Fagner','Camila','Andressa','Lucão'];

for(let i = 0; i<nomes.length; i++) {
    console.log('[for]', nomes[i]);
}
```

### while  
A declaração **while** cria um laço que executa uma rotina específica enquanto a condição de teste for avaliada como verdadeira. A condição é **avaliada antes da execução da rotina**. 
```
while (condição) {
    rotina
}
```

**Exemplo**

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

### do ... while 
```
let i = 0; 

do {
    console.log(i);
    i += 1; 
} while (i <= 5);
```

### forEach e map
[Aula Alura sobre forEach e map](https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=Cj0KCQjw4eaJBhDMARIsANhrQABBNkfAJ5iseJHPwP9zt6SmWl92hVRqoCHons5yiyr4cu3-Y8Okn-gaAnhlEALw_wcB)


O **forEach** percorre todos os itens de um array, tal como o loop for normal, isso porque internamente ele possui um loop for.

```
const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno forEach: ', retornoForEach);
```

Enquanto o forEach foi feito para ser uma alternativa ao loop for, o **map** foi feito para fazemos operação de transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base.

```
const retornoMap = nomes.map((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno map: ', retornoMap);
```

Caso queiramos somente uma forma mais elegante para trabalhar com o for usamos o .forEach e caso queiramos transformar |alterar valores ou mesmo concatenar operações em cima de arrays o .map é o mais indicado.


## Funções
As funções são peças chaves para que nosso programa se comporte da maneira que queiramos. E elas também servem para isolar algumas partes do código, além de reaproveitar e organizar melhor nosso código. 
### Funções de primeira classe e ordem maior
A função pode ser atribuida a uma variável, pode ser atribuida a uma estrutura de dados (seja um object ou um array) e pode ser passada por outro argumento ou até mesmo ser passada para outras funções. 

**Exemplo**: 

Declarando uma função:
``` 
function getName() {
    return 'Grazielle Amanda do Carmo Café';
}

console.log(getName());
// saída: Grazielle Amanda do Carmo Café
```


Passando a função para uma constante e chamando uma função dentro de outra:
```
function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn; 
logFnResult(getName);
```

### Declaração de funções
Declaração da função no formato padrão:
```
function fn() {
    return 'Code here';
}

console.log(fn());
```

Declaração no formato de arrow function:
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


# Programação Orientada a Objetos
## Tipos de Métodos
Metodo possui 2 comportamentos padrão:
.Realizar uma operação e retornar o resultado;
.Realizar uma operação sem retornar resultado; 

Métodos possuem categorias: 
.Métodos de instância: Só podem ser usados, através de um objeto;
.Métodos estáticos: Existem o escopo da classe, ou seja, não dependem de instâncias para serem usados
    
Método **Get**: Obtém alguma informação
Método **Set**: Define ou altera alguma informação
## Classes
A declaração **class** cria uma nova classe com dado nome usando a herança do protótipo base. 

### Sintaxe 
```
class name [extends] {
    // class body
}
```

Exemplo de implementação
```
class contaBancaria {
    Nome: string; 
    Idade: number; 
}

const contaBancaria = new ContaBancaria();
console.log(contaBancaria);
```

### Instanciar uma classe
O termo **instanciar** uma classe significa que estamos criando um objeto com a estrutura da classe. É o mesmo que dizer 'criar um objeto' daquela classe. Para instanciar uma classe utilizamos a palavra reservada **new** seguido pelo nome da classe e invocando o construtor padrão '()' da classe. 

## Exercícios sobre Programação Orientada a Objetos
### Exercício 01
.Criar um método na classe Pessoa chamado trabalhar que deve adicionar um valor aleatório entre 1 e 50 na propriedade dinheiro da pessoa (sempre que chamar o método trabalhar, ela irá ganhar um valor de 1 a 50). A última instrução do método deve exibir uma mensagem  da quantia do valor recebido após o trabalho. A pessoa só pode trabalhar se a idade for igual ou maior que 18 anos. Se a pessoa tiver menos de 18 anos deve se exibir uma mensagem que ela (ainda) não pode  trabalhar. 

.Criar um método na classe Pessoa chamado ir ao mercado e deve subtrair um valor aleatório entre 1 e 100 do dinheiro da pessoa. A pessoa não deve realizar a compra se o valor da compra a deixe com menos que 0 de saldo. A última instrução do método de ir ao mercado deve informar que a pessoa fez uma compra no valor x e ficou com y de dinheiro restante, onde x é o valor descontado e y o valor de dinheiro dela. 

.Chamar o método envelhecer e adicionar 4 anos. 

.Chamar o método trabalhar 

.Chamar o método envelhecer

.Chamar o método trabalhar 

.Se agora a pessoa já for maior de idade, chamar o método ir ao mercado. 

### Exercício 02
.Quando a pessoa tiver 18 anos ou mais ela precisa ter uma rotina mensal de trabalho e compras. Considerando que o mês tem 30 dias, a pessoa deve trabalhar todos os dias. 

.Ela deve ter dinheiro o suficiente para fazer compras pelo menos uma vez a cada 5 dias, incluindo finais de semana. 

.Se passarem 5 dias e a pessoa não tiver saldo para realizar a compra, ela deve receber $200 reais emprestado da mãe e fazer a compra. Sempre que ela pegar o dinheiro emprestado, ela deve devolver assim que tiver o saldo suficiente. 
.Após passar os 30 dias, se a pessoa tiver mais de $300 de saldo, ela deve doar $50 para a caridade. 

.Esta rotina deve se repetir por 12 meses. 

.O valor da compra de mercado deve ser agora, no mínimo, de $50 para que ela compre o necessário para 5 dias. 

.Sempre que a grazi pegar dinheiro emprestado, ela deve armazenar quantas vezes ela pegou dinheiro emprestado e sempre que ela pagar a mãe dela o dinheiro emprestado, ela deve remover 1 deste contador de dinheiro emprestado. 

 ### Exercício 03
.Implementar o método Trabalhar() dentro da classe MundoCapitalista seguindo as mesmas diretrizes da AcaoSocial;  

.Remover a implementação do método Trabalhar() da classe Pessoa; 

.Alterar o código em todos os pontos que chama o método Trabalhar(), para chamar via classe MundoCapitalista em vez da classe Pessoa; 




# Typescript
O Typescript é um **superset** do JavaScript. Além dele conseguir adicionar tipos, ele adiciona funcionalidades que o JavaScript não tem. É possível adicionar interfaces, enum, tipos genéricos, etc. Não é possível executar (ainda) um algoritmo em TypeScript, portanto, é necessário compilar os arquivos TypeScript e gerar o algoritmo correspondente em JavaScript. 


[Site Typescript] (https://www.typescriptlang.org/)

## Execução de um arquivo TypeScript
* <tsc .\nome_do_arquivo.ts>
* <node .\nome_do_arquivo.js>

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

## Instalação 
* Abra uma janela no terminal do seu computador. 
* No terminal, é possível verificar o número da versão instalada em sua máquina

```
node --version 

```

ou 

```
node -v
```