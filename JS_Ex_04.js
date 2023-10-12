/*  
Crie um programa que contenha os seguintes tipos de funções:

uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
uma função tradicional com parâmetros e um retorno de valor;
uma arrow function com parâmetros e que retorna um valor.
Crie um programa que utiliza essas três funções de forma lógica, por exemplo: um programa de calculadora.

*/


//  Função tradicional sem nenhum parametro //
const calculadora = function calculadora() {
    console.log(" 🎖️🎖️🎖️ Calculadora pronta para o serviço! 🎖️🎖️🎖️");
}
calculadora();

//  Função tradicional com parametros e retorno de valor //
const calculadoraMult = function multiplicaçao(a, b) {
    return (a * b);
}
let resultadoMult = calculadoraMult(4, 6);
console.log("Resultado: " + resultadoMult)

// Função arrow com parametros e retorno de valor //
const calculadoraSub = (a, b) => (a - b);

let resultadoSub = calculadoraSub(10, 5);
console.log("Resultado: " + resultadoSub);

