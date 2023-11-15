const prompt= require('prompt-sync')();


let N1= parseFloat(prompt("INSIRA O PRIMEIRO NÚMERO:"))
let N2= parseFloat(prompt("INSIRA O SEGUNDO NÚMERO:"))

try {
  if (isNaN(N1) || isNaN(N2)) {
    throw new Error("Caracteres numéricos não encontrados. Informe os números novamente.");
  }

  let resultado = N1 / N2;

  if (!isFinite(resultado)) {
    throw new Error("Resultado invalido.");
  }

  console.log(`Resultado: ${resultado}`);
} catch (error) {
  console.error(`Erro: ${error.message}`);
} finally {
  console.log("Operação finalizada...");
}