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

