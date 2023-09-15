/* Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. 
A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará
no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, 
o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido. */

const prompt = require(`prompt-sync`)();

let nome = prompt("Digite seu nome:");
let anoDeNasc = parseInt(prompt("Digite seu ano de nascimento:"));

while(true) {
    try {
        if(anoDeNasc == "") throw "Preencha este campo.";
        if(isNaN(anoDeNasc)) throw "Digite seu ano de nascimento em números";
        if(anoDeNasc < 1940 || anoDeNasc > 2021) throw `Ano de nascimento inválido`;
        break;
      }
      catch(err) {
        console.log(err);
      }
    anoDeNasc = parseInt(prompt("Digite seu ano de nascimento:"));
}

const idade2 = -(anoDeNasc - 2022);
console.log("Seu nome é " + nome, "e você completará " + idade2, "anos em 2022.");