/*  Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, 
alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.  */



let nomes= [ "Genneton", "Carlos", "Rodrigo", "Matheus", "Alex"];
let idade= [23, 20, 55, 65, 24 ];
let corFavrorita= [ "roxo", "azul", "vermelho", "preto", "verde" ];

console.log("Nome: " + nomes);
console.log("Idade: " + idade);
console.log("Cor favrorita: " + corFavrorita);



idade[3]= 12;
corFavrorita[4]="cinza";

console.log("Nome: " + nomes);
console.log("Idade modificada: "+ idade);
console.log("Cor modificada: "+ corFavrorita);