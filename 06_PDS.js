const PromptSync = require('prompt-sync')();
const prompt= PromptSync

class FunçãoStrategy{
    execute(num1, num2){}
}

class Soma extends FunçãoStrategy{
    execute(num1, num2){
        return num1 + num2 
    }
}

class Subtração extends FunçãoStrategy{
    execute(num1, num2){
        return num1 - num2 
    }
}

class Multiplicação extends FunçãoStrategy{
    execute(num1, num2){
        return num1 * num2 
    }
}

class CalculadoraStrategy{
    constructor(FunçãoStrategy){
        this.FunçãoStrategy= FunçãoStrategy;
    }
    setStrategy(FunçãoStrategy){
this.FunçãoStrategy=FunçãoStrategy
    }

    operação(num1, num2){
        return this.FunçãoStrategy.execute(num1, num2)
    }
}

let num1= parseInt(prompt("Insira um número: "));
let num2= parseInt(prompt("Insira um número: "));
let operação= prompt("Informe a operação: ( + SOMA // - SUBTRAÇÃO // * MULTIPLICAÇÃO )")

let calculadora;
switch (operação){
    case '+':
       Strategy= new Soma();
        break;
    case '-':
        Strategy= new Subtração();
        break;
    case '*':
        Strategy= new Multiplicação();
        break;
    default:
        console.log('operação invalida.')

}

const appCalculadora= new CalculadoraStrategy(Strategy);
const resultado = appCalculadora.operação(num1, num2);

console.log(`Resultado= ${resultado}`);