function soma(a, b){
    return a + b;
}

console.log(soma(2,4));

// Caso o primeiro parâmetro passado para a função seja sempre o mesmo, podemos usar o currying
soma(2,2);
soma(2,4);
soma(2,10);



// Implementação: 
function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(2); 
console.log(soma2(2));
