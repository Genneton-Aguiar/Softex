
const prompt= require('prompt-sync')();

let nota1= parseFloat(prompt("Nota do primeiro bimestre: "));
let nota2= parseFloat(prompt("Nota do segundo bimestre: "));
let nota3= parseFloat(prompt("Nota do terceiro bimestre:"));

let media = (nota1 + nota2 + nota3) / 3;
console.log("Media = " + media.toFixed(1));