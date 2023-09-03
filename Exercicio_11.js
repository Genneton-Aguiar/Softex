
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