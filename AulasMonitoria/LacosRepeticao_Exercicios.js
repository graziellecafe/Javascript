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

// function forToLearn (){
//     const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria']; 

//     for(let i = 0; i < nomes.length; i = i + 1 ) { 
//         console.log('[for]', nomes[i]); 
//     }
// }
// // forToLearn();

// // ------------------------------------------------------------------------
// // Vai percorrer todos os itens do array pois internamente ele tem um loop for. 
// // Executar uma função a cada vez que se chama 
// // Retorna como exemplo uma função void 
// function forEachToLearn(){
//     const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria']; 
//     nomes.forEach(function(nome, i) {               // a função chama o (item, posição do item)
//         console.log('[forEach]', nome, i); 
//     })
// }
// // forEachToLearn ();


// // ------------------------------------------------------------------------

// function mapToLearn(){
//     const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria']; 
//         nomes.map(function(nome, i) { 
//             console.log('[forMap]', nome, i); 
//     })
// }

// mapToLearn();


// ---------------- EXERCÍCIOS --------------------
// For each: não tem retorno  
function forEachToLearnMaiusculo(){
    const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria']; 
    const nomesForEachRetorno = nomes.forEach(function(nome){ // a função chama o (item, posição do item)            
        console.log('[forEach]', nome);
        return nome.toUpperCase(); 
    })
    console.log('[forEachRetorno]',nomesForEachRetorno); // não imprime, pois o forEach retorna 'void'
}

forEachToLearnMaiusculo()



// Map: o retorno do map é um array
function forMapToLearnMaiusculo(){
    const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria']; 
    const nomesMapRetorno = nomes.map(function(nome){           
        console.log('[Map]', nome);
        return nome.toUpperCase(); 
    })
    console.log('[MapRetorno]',nomesMapRetorno); 
}

forMapToLearnMaiusculo()


// Conclusão da aula: 
/* 
    Se quisermos apenas uma forma mais elegante de usar o for, podemos utilizar o forEach. 
    Caso queira retornar, ou alterar valores, ou até mesmo concatenar operações em cima de arrays, usamos o map. 

    Dicas de estudo: filter
    https://vidafullstack.com.br/javascript/foreach-map-filter-find-every-some-reduce-com-javascript/
*/ 