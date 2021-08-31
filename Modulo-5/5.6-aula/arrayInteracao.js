/**
 * arquivo: arrayBasicos.js
 * descrição: explicação de como podemos usar arrays
 * author: Dani Lima 
 * data: 20/08/2021
 */

// join 
    /*let eletrodomesticos = [
            'Televisao',
            'Geladeira',
            'Fogao',
            'Microondas'
        ];
        console.log(eletrodomesticos.join(' - '))*/
// slice
/*let eletrodomesticos = [
    'Televisao',
    'Geladeira',
    'Fogao',
    'Microondas'
];
console.log(eletrodomesticos.slice(1))*/
//concat
/*let array1= [1,2,3,4,5];
let array2= [6,7,8,9,10];

let conjutoNumeros = array1.concat
console.log(array1.concat(array2));
console.log(conjutoNumeros);*/

//length

/*let eletrodomesticos = [
    'Televisao',
    'Geladeira',
    'Fogao',
    'Microondas'
];
console.log(eletrodomesticos.length);
*/
//indexOf
/*let eletrodomesticos = [
    'Televisao',
    'Geladeira',
    'Fogao',
    'Microondas'
];
let posicaoEletro = eletrodomesticos.indexOf('Geladeira');
console.log(posicaoEletro);*/

//lastIndexOf
let eletrodomesticos = [
    'Televisao',
    'Geladeira',
    'Televisao',
    'Microondas'
];
let posicaoEletro = eletrodomesticos.lastIndexOf('Televisao');
console.log(posicaoEletro);

