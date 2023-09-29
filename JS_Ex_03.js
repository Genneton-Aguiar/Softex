const prompt = require('prompt-sync')();

while (true) {
    console.log("Escolha a operação matematica desejada:");
    console.log("1:SOMA");
    console.log("2:SUBTRAÇÃO");
    console.log("3:MULTIPLICAÇÃO");
    console.log("4:DIVISÃO");
    console.log("0:SAIR");


    var escolha = parseInt(prompt("Digite o numero da operação desejada."));

    if (escolha == 1) {
        let n1soma = parseFloat(prompt("Digite o primeiro numero:"));
        let n2soma = parseFloat(prompt("Digite o segundo numero:"));
        let soma = n1soma + n2soma;
        console.log(n1soma, "+", n2soma, "=", + soma.toFixed(2));
    }

    if (escolha == 2) {
        let n1sub = parseFloat(prompt("Digite o primeiro numero:"));
        let n2sub = parseFloat(prompt("Digite o segundo numero:"));
        let sub = n1sub - n2sub;
        console.log(n1sub, "-", n2sub, "=", + sub.toFixed(2));
    }

    if (escolha == 3) {
        let n1mult = parseFloat(prompt("Digite o primeiro numero:"));
        let n2mult = parseFloat(prompt("Digite o segundo numero:"));
        let mult = n1mult * n2mult;
        console.log(n1mult, "x", n2mult, "=", + mult.toFixed(2));
    }

    if (escolha == 4) {
        let n1div = parseFloat(prompt("Digite o primeiro numero:"));
        let n2div = parseFloat(prompt("Digite o segundo numero:"));
        let div = n1div / n2div;
        let resto = n1div % n2div;
        console.log(n1div, "÷", n2div, "=", + div.toFixed(3));
        console.log("Resto: " + resto.toFixed(3));
    }

    if (escolha == 0) {
        console.log("Desligando...");
        break;
    }
}


