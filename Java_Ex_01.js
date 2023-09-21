/* vamos criara um cadastro de pessoa com os seguintes dados: nome, salario, idade
e se possui diploma. Aantes de começar a codificação, identifiquem os tipos de cada variavel 
em seguida desenvolam o codigo utilizando exemplos para cada variavel que
respeitem os tios identificados,. Certifiquem-se de que os valores correspondem aos tipos de dados corretos.
*/

const prompt = require("prompt-sync")();

let nome= "Genneton" // TIPO STRING 
let salario=parseFloat(4.000); // TIPO NUMBER 
let idade= parseInt(23); // TIPO NUMBER 
let diploma= true  ; // TIPO BOOLEAN

console.log("Nome:",nome);
console.log( "Salario:",salario.toFixed(3));
console.log("Idade:",idade);
console.log("Possui Diploma?",diploma);
