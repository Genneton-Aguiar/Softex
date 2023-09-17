/* Nesta atividade, você deve criar um código em JavaScript com uma matriz 
bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as 
diferentes informações sobre ele, como nome, espécie e idade.  */


const prompt = require("prompt-sync")();

let gatos = parseInt(prompt("informe a quantidade de gatos:"));
let lista = []

for (let i = 0; i < gatos; i++) {

  console.log("informe os dados do gato ", i+1, ":")
  const nome = prompt("Nome:");
  const idade = parseInt(prompt("Idade:"));
  const raca = prompt("Raça:");
  lista.push([nome,idade,raca]);

}

console.log("LISTA DOS GATOS:")

for (let i = 0; i < lista.length; i++ ){
  console.log("Gato ", i+1, ":");
  console.log(`Nome: ${lista[i][0]}. \nIdade: ${lista[i][1]} anos. \nRaça: ${lista[i][2]}.`)
  
}
