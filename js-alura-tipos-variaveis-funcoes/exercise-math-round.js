function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = salario/horasTrabalhadasNoMes;

    return Math.round(salarioHora);    
}

console.log('O salário/hora é de: ', ganhoPorHora(1125, 128));