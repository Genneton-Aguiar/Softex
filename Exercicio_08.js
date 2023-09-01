
let NomeDoAluno= prompt("Digite o nome do aluno");

let nota1= parseFloat(prompt("Nota do primeiro bimestre de " + NomeDoAluno));
let nota2= parseFloat(prompt("Nota do segundo bimestre de " + NomeDoAluno));
let nota3= parseFloat(prompt("Nota do terceiro bimestre de " + NomeDoAluno));

let media = (nota1 + nota2 + nota3) / 3;
console.log("Media = " + media.toFixed(1));

    if (media >=7) {
        console.log("Aluno aprovado.");
    }
    else if (media < 7) 
        console.log("Média não atingida, aluno reprovado.");
    
    

