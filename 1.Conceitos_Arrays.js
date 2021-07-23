// ---------------------- ARRAY ----------------------- // 

var frutas = ['Maçã', 'Banana'];
console.log(`As frutas são: ${frutas}`);
console.log(`O tamanho do array é: ${frutas.length}`);
console.log(`O primeiro índice do array é: ${frutas[0]}`);

frutas.push('Pêra', 'Morango');  // Push: adiciona um elemento no array
console.log(frutas);

frutas.pop(); // Elimina último elemento do array
console.log(frutas);

frutas.shift();
console.log(frutas); // Elimina o primeiro elemento do array

frutas.push('Manga', 'Limão', 'Laranja');
console.log(`O novo array é: ${frutas}`);

console.log(`A posição do elemento Limão é: ${frutas.indexOf('Limão')}`);