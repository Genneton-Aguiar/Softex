/* 
-------------------------------------------------------------------------------------------------------------
"Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um 
código em JavaScript para encontrar o valor 20.
Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo
com a que for mais adequada para essa situação.
Codifique a solução mais eficiente para buscar o número 20 no array."
--------------------------------------------------------------------------------------------------------------
Para este teste,tratando-se de um array pequeno,é mais recomendado usar a busca linear, pois consegue informar
a posição de todos os numeros nas suas respectivas posições de fato.

EX: caso o numero procurado fosse 7, a busca lienar indicaria na posição 9, oque está correto. 
Usando a busca binaria neste array, se pedirmos para encontrar o numero 7, indicará o numero na posição 1.

isso acontece pois a busca binaria vai ordenar o array de numeros aleatorios em numeros ordenados, 
econtrando o numero desejado, mas informando erroneamente sua posição comparado com o array entregue.
A busca binaria é mais eficiente em uma lista ordenada, exemplo disso é numa lista telefonica com os nomes 
ordenados em ordem alfabetica. 

Neste caso tanto a busca linear quanto a binaria vao enontrar o numero 20 na posição certa, mas caso queira 
encontrar outro numero (15, 8, 12...),somnete a busca lienar irá informar o numero junto com sua respectiva 
posição verdadeira no array.*/


const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const encontrarValor = 20;

function buscaLinear(){
  for (let i = 0; i < array.length; i++){
    if (array[i] === encontrarValor) 
      return i;
  }
  return -1;
}

const lista = buscaLinear(array, encontrarValor);

if (lista !== -1) {
    console.log(`Valor ${encontrarValor} encontrado na casa ${lista}.`);
} else {
    console.log(`Valor ${encontrarValor} não encontrado.`);
}