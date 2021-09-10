//  Exercícios sobre ForEach and Map -- Formas diferentes de realizar um for
// Aula dia: 30/08

/* Dado um array de entrada, quero gerar um novo array com o valor do triplo do array original:
    ex: entrada = [1,2,3,4]
    saida = [3,6,9,12]
*/

// Resolvendo via Map
function triploArrayOriginal(){
    const entrada = [1,2,3,4];
    const saida = entrada.map(numero => {
        return numero*3;
    })
    console.log(saida);
}

triploArrayOriginal()

// Exercício 02
/* Given an array of cities, using map() method, return/create 
an array which will include all the cities having only the first 
letter of each city name capitalized.
*/ 

function firstLetterCities(){
    const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'são paulo', 'lisbon', 'mexico city', 'paris'];
    const onlyFirstLettersCapitalized = cities.map(function(city){
        return city[0].toUpperCase() + city.slice(1); //slice: pega o restante da 'palavra' a partir do que você deseja, ex: slice(1) pega partir da segunda letra.. 
    })
    console.log(onlyFirstLettersCapitalized);
    return onlyFirstLettersCapitalized;
}
// firstLetterCities();


/*
    Exercício 03
    Using the forEach() loop, console.log the names of all the elements in 
    the citiesCapitalized array including the number representing the position
     of the element starting with 1 for the first (index) element.
*/ 

function citiesWithNumber(){
    const answerWithUpperCase = firstLetterCities();
    const results = [];
    answerWithUpperCase.forEach(function(city, i){
        results.push(`${i}. ${city}`);
    })
    console.log(results);
}

citiesWithNumber()