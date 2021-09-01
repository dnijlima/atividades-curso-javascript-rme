/**
 * arquivo: condicional.js
 * descrição: explicação de como podemos usar if e if-else
 * author: Dani Lima 
 * data:30/08/2021
 */

const { createGzip } = require("zlib");

// => objetos
/*let pessoa ={
    nome: 'dani',
    sobrenome: 'lima',
    idade: 26,
    profissao: 'designer',
    empresa: 'cz',
}
console.log(pessoa);*/



// brackets vs dot notation
let pessoa = {
    nome: 'dani',
    sobrenome: 'lima',
    idade: 26,
    profissao: 'designer',
    empresa: 'cz',
};
//let listarProfissao = pessoa.profissao;
let listarProfissao = pessoa['profissao'];

console.log(listarProfissao)