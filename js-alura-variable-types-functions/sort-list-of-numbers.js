// Ordenação de números no JavaScript

var lista = [5, 2, 10, 8, 3];
// Não funciona. A função sort usa por padrão a ordenação alfabética baseada na tabela Unicode. 
console.log(lista.sort());


// Realizando a própria função
function ordenaNumeros(a,b) {
    if (a === b) {
        return 0; 
    }
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
}

console.log(lista.sort(ordenaNumeros));