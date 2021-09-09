//
const nomes = ['Grazielle','Fagner','Camila','Andressa','Lucão'];

// FOR
for(let i = 0; i<nomes.length; i++) {
    console.log('[for]', nomes[i]);
}

// FOR EACH
const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno forEach: ', retornoForEach);

// MAP
const retornoMap = nomes.map((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log('Retorno map: ', retornoMap);