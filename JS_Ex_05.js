const prompt = require("prompt-sync")();


class Banco {
    constructor() {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoDeConta = tipoDeConta;
        this.agencia = agencia;
    }

    numerodaconta = function () {
        console.log("CONTA: " + this.conta);
    }

    buscarsaldo = function () {
        console.log("SALDO: " + this.saldo);
    }

    tipo= function(){
        console.log("TIPO DE CONTA: " + this.tipoDeConta);
    }

    deposito(deposito) {
        this.saldo += deposito;
    }
    saque(saque) {
        if (saque > this.saldo) {
            console.log("saldo insuficiete");
        }
        else {
            this.saldo -= saque;
            console.log("Operação realizada.")
        }

    }

}

const conta = prompt("Informe sua conta: ");
const saldo = 0;
const tipoDeConta = prompt("Informe o tipo da sua conta: ");
const agencia = prompt("Informe sua agencia: ");

const novaConta = new Banco(conta, saldo, tipoDeConta, agencia)

let continuar = true;
while (continuar) {
    const operacao = prompt("Qual operação deseja realizar? (1= DEPOSITO / 2= SAQUE/ 3= SALDO / 4= NÚMERO DA CONTA  / 5= TIPO DE CONTA / 6= SAIR) ");

    switch (operacao) {

        case "1":
            const valorDeposito = parseFloat(prompt("Informe o valor para depósito: "));
            novaConta.deposito(valorDeposito);
            break;

        case "2":
            const valorSaque = parseFloat(prompt("Informe o valor para saque: "));
            novaConta.saque(valorSaque);
            break;

        case "3":
            novaConta.buscarsaldo();
            break;

        case "4":
            novaConta.numerodaconta();
            break;

        case "5":
            novaConta.tipo();
            break;

        case "6":
            console.log(" Operação finalizada...");
            continuar = false;
            break;

        default:
            console.log("Operação inválida.");
            break;
    }
}




