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