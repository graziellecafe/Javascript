# Arrow Function
*Declaração da função no formato padrão*
```
function fn(){
    return 'Code here';
}


console.log(fn());
```

*Declaração no formato de arrow function*
```
const arrowFunction = () => 'Code here using arrow function';
console.log(arrowFunction());
```

*Declaração no formato de arrow function para mais de uma expressão*
```
const arrowFunctionMoreExpressions = () => {
    return 'Code here for more expressions inside body';
}

console.log(arrowFunctionMoreExpressions());
```


# Laços de Repetição 
## While 
Estrutura condição while
```
while (condição) {
    rotina
}
```

*Exemplo*
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

