/**
 * arquivo: arrayInteracao2
 * descrição: explicação de como podemos usar arrays
 * author: Dani Lima 
 * data: 20/08/2021
 */

//forEach

/*let eletrodomesticos = [
    'Televisao',
    'Geladeira',
    'Fogao',
    'Microondas'
];

eletrodomesticos.forEach((listaDeEletro) => {
    console.log(listaDeEletro);
});*/
//map
/*let eletrodo = [
    { elet: 'Televisao', preco: 1500 },
    { elet: 'Fogao', preco: 2500 },
    { elet: 'gela', preco: 850 },
    { elet: 'micr', preco: 300 },
];
const precoProdutos = eletrodo.map((item)=>{
    return item.preco;
})
console.log(precoProdutos);*/

//filter
/*let eletrodo = [{
        elet: 'Televisao',
        preco: 1500
    },
    {
        elet: 'Fogao',
        preco: 2500
    },
    {
        elet: 'gela',
        preco: 850
    },
    {
        elet: 'micr',
        preco: 300
    },
];
const comprarEletro = eletrodo.filter(eletrodo => eletrodo.preco >= 1000);
console.log(comprarEletro);*/

//reduce
/*let reais = [27.86, 71.95, 36.5];
let somarValores = reais.reduce((total, valor)=> {
    return total + valor;}
)
console.log(somarValores);*/

//every
/*let eletrodo = [{
        elet: 'Televisao',
        preco: 1500
    },
    {
        elet: 'Fogao',
        preco: 2500
    },
    {
        elet: 'gela',
        preco: 850
    },
    {
        elet: 'micr',
        preco: 300
    },
];
const produBarato = 500;
const promoEletro = eletrodo.every(eletrodo => eletrodo.preco >= produBarato);
console.log(promoEletro);*/

//some
/*let eletrodo = [{
        elet: 'Televisao',
        preco: 1500
    },
    {
        elet: 'Fogao',
        preco: 2500
    },
    {
        elet: 'gela',
        preco: 850
    },
    {
        elet: 'micr',
        preco: 300
    },
];
const produCaro = 1000;
const eletroCaro = eletrodo.some(elet => elet.preco <= produCaro);
console.log(eletroCaro);*/

//find
/*let eletrodo = [{
        elet: 'Televisao',
        preco: 1500,
        setor: 'sala'
    },
    {
        elet: 'Fogao',
        preco: 2500,
        setor: 'cozinha'
    },
    {
        elet: 'gela',
        preco: 850,
        setor: 'cozinha'
    },
    {
        elet: 'micr',
        preco: 300,
        setor: 'cozinha'
    },
];
const produtosCozinha = eletrodo.find(eletrodo => eletrodo.setor == 'cozinha');
console.log(produtosCozinha);*/

//findIndex

let idades = [3, 10, 18, 20];
const maiorIdade = 18;
const ehAdulto = idades.findIndex(idade => idade >= maiorIdade);

console.log(ehAdulto);