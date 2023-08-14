/* Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns 
números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja 
digitado um número inteiro e que no final imprima o resultado da tabuada desse número. */ 

var valor;
var i =1;

valor = prompt ("Digite o número do qual deseja a tabuada:");
console.log ("Tabuada do",valor);
do {
  console.log( valor, "X", i, "=" + valor * i++ ) ;
}
while (i <=10);

