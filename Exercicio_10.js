/* Desenvolva um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. 
Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis. */


let NomeDoAluno= prompt("Digite o nome do aluno");

let nota1= parseFloat(prompt("Nota do primeiro bimestre de " + NomeDoAluno));
let nota2= parseFloat(prompt("Nota do segundo bimestre de " + NomeDoAluno));


let falta= prompt("Numero de faltas de: " + NomeDoAluno);
console.log( "Falta = " + falta);

if (falta >=3){
        console.log("Aluno " + NomeDoAluno + " ultrapassou o limite de faltas, reprovado.")
    }
else if (falta <3)
  console.log("Aluno " + NomeDoAluno + " não possui o minimo para reprovar por falta.")
    


let media = (nota1 + nota2) / 2;
console.log("Media = " + media.toFixed(1));


    if (media >=7) {
        console.log("Aluno " + NomeDoAluno + " está aprovado por média.");
    }
    else if (media < 7) 
        console.log("Aluno " + NomeDoAluno+ " não atingiu a média, reprovado.");