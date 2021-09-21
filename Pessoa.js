// Representação estruturada
class PessoaJavascript {
    Nome = '';
    Idade = 0;
}

//objeto dinamico
const pessoaDesestruturada = {
    nome: '',
    idade: 0
}

console.log(pessoaDesestruturada);

const pessoaJavascript = new PessoaJavascript();
pessoaJavascript.Nome = 234;
pessoaJavascript.Idade = 32;
console.log(pessoaJavascript);


pessoaDesestruturada.orientacaoSexual = 'homosexual';
pessoaDesestruturada.NumerodoCpf = 09627399604;
console.log(pessoaDesestruturada);
console.log(new Date().toString());
console.log(new Date().toISOString());