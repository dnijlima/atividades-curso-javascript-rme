/**
 * arquivo: interacaoObjetos.js
 * descrição: explicação de como podemos usar if e if-else
 * author: Dani Lima 
 * data:30/08/2021
 */


//for ... in
/*funcionario = {
    nome: 'dani',
    sobrenome: 'lima',
    idade: 26,
    profissao: 'designer',
    empresa: 'cz',
    ativa: true,
};
//let resultadoFuncionario = console.log(funcionario);
console.log(funcionario.nome);
console.log(funcionario.profissao);
console.log(funcionario.idade);
console.log(funcionario.empresa);
for (let listarFuncionario in funcionario){
    console.log(funcionario[listarFuncionario]); //loop para listar o objeto de funcionarios
}*/



// if ... in
funcionario = {
    nome: 'dani',
    sobrenome: 'lima',
    idade: 26,
    profissao: 'designer',
    empresa: 'cz',
    ativa: true,
};
if ('profissao' in funcionario){
    console.log('a key profissao existe no objeto Funcionario')
}