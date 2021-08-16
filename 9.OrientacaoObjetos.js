//  Primeira Aula de Orientação a Objetos --- 16/08/2021 // 

// Descrição: usa-se objetos para modelar. Podem conter dados e códigos
// relacionados. Dados dos objetos podem ser armazenados ordenadamente,
// (encapsulados) dentro de um pacote de objetos. 

// Primeiro passo: definição e inicialização de uma variável 
const person = {
    name: ['Grazielle', 'Café'],
    age: 27,
    gender: 'female',
    interests: ['music', 'crochet'],
};

console.log(`Her name is ${person.name[0]} ${person.name[1]}, and her interests is ${person.interests}`);



const namePerson = {
    firstName: 'Ramon',
    secondName:'Fernandes',
};

console.log(namePerson.firstName, namePerson.secondName);