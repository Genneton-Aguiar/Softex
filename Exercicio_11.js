/* Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
Categoria A: Veículos com duas ou três rodas;
Categoria B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
Categoria C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
Categoria D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
Categoria E: Veículos com quatro rodas ou mais e com mais de 6000 kg. */

let carteiraA= "A";
let carteiraB= "B";
let carteiraC= "C";
let carteiraD= "D";
let carteiraE= "E";

var quantidadeDeRodas= parseInt(prompt("Quantas rodas possui o veiculo?"));
if (quantidadeDeRodas <=3){
    console.log("Sua categoria é:" + carteiraA);
    return;
}

if (quantidadeDeRodas ===4){
    var quantidadeDePessoas= (prompt("Quantas pessoas vão no veiculo?"));
}
if (quantidadeDePessoas <=8){
    var pesoBruto = (parseFloat(prompt("insira o peso bruto do veiculo (kg):")));
}
if (pesoBruto < 3500){
  console.log("Sua categoria é:" + carteiraB);
  return;
}
else if (quantidadeDePessoas >8){
    console.log("Sua categoria é:" + carteiraD);
    return;
}


else if (quantidadeDeRodas >=4){
    var pesoBruto = (parseFloat(prompt("insira o peso bruto do veiculo (kg):")));
}
if (pesoBruto >3500 && pesoBruto < 6000){
  console.log("Sua categoria é:" + carteiraC);
 
}
 else if (pesoBruto > 6000){
  console.log("Sua categoria é:" + carteiraE);
  return;
}