/**
 * arquivo: lacoWhile.js
 * descrição: explicação de como podemos usar while w do-while em JavaScript;
 * author: Dani Lima 
 * data:09/08/2021
 */

//while => a condição será testada no início de cada interação do loop
/*let numeroInicial = 1;
while (numeroInicial <= 10) {
    console.log('O numero é ...: ', numeroInicial);
    numeroInicial++;    
} ctrl + shift + a >>> comentar  */  

//do-while => sempre será executada uma vez

let numeroInicial = 1;
do {
    console.log('O númeor é ...:', numeroInicial);
    numeroInicial++;
} while (numeroInicial <= 10);