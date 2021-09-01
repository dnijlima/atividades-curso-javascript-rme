/*
 * arquivo: arrayBasicos.js
 * descrição: explicação de como podemos usar arrays
 * author: Dani Lima 
 * data: 20/08/2021
 */

// funcao anonima nao recebe parametro
/*function mostrarMensagem(){
    return console.log('Parabéns!')
}
//invocar a funcao pra ela funcionar
mostrarMensagem();*/

//exemplo 2 --- segui a camelcase

/*function multiplicaNumeros(numero1, numero2){
    return numero1 * numero2;

}
//3*2 >> 3 é o numeor1 e 2 é o numero2
let resultadoFinal = multiplicaNumeros(3,2);
console.log(resultadoFinal);*/

//exemplo 3 -- numero impares  -- anonima - function dentro de um array
//length fanzer uma leitura dentro do array, o ++ pra fazer ate completar
//se numeros dentro de i (do for) tiver um resto (%) 2 ou for diferente(!=) de 0 ele é par

let numeros = [1,2,3,4,5,6,7,8,9,10];
function mostraNumImpares(){
    for (let i = 0; i < numeros.length; i++){
        
        if(numeros[i] % 2 != 0) {
            console.log(numeros[i]);
        }
    }0
}

mostraNumImpares();