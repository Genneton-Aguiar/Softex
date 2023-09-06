/* Faça uma calculadora que os números e as operações serão feitas 
pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. 
No início, o programa mostrará a seguinte lista de operações:

1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, 
o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. 
Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, 
o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. */

while(true) {

    console.log("Escolha a operação matematica desejada:");
    console.log("1:SOMA");
    console.log("2:SUBTRAÇÃO");
    console.log("3:MULTIPLICAÇÃO");
    console.log("4:DIVISÃO");
    console.log("0:SAIR");
    
    
    var escolha= parseInt(prompt("Digite o numero da operação desejada."));
    
      
      if(escolha==1){
        let n1soma =parseInt(prompt("Digite o primeiro numero:"));
        let n2soma =parseInt(prompt("Digite o segundo numero:"));
        let soma= n1soma + n2soma;
        console.log(n1soma, "+", n2soma, "=", + soma);
      }
    
    if(escolha==2){
        let n1sub =parseInt(prompt("Digite o primeiro numero:"));
        let n2sub =parseInt(prompt("Digite o segundo numero:"));
        let sub= n1sub - n2sub;
        console.log(n1sub, "-", n2sub, "=", + sub);
      }
    
    if(escolha==3){
        let n1mult =parseInt(prompt("Digite o primeiro numero:"));
        let n2mult =parseInt(prompt("Digite o segundo numero:"));
        let mult= n1mult * n2mult;
        console.log(n1mult, "x", n2mult, "=", + mult);
      }
    
    if(escolha==4){
        let n1div =parseInt(prompt("Digite o primeiro numero:"));
        let n2div =parseInt(prompt("Digite o segundo numero:"));
        let div= n1div / n2div;
        console.log(n1div, "÷", n2div, "=", + div);
      }
      if(escolha==0){
        console.log("Desligando...");
        break;
      }
       var tecla= ("1","2","3","4","0");
      while(tecla!= "1","2","3","4","0"){
        console.log("Opção invalida.");
        break;
      }
    
    }
      
    