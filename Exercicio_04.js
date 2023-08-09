/*
Enunciado
labore um algoritmo que representa um cadastro. Ele desenvolve os seguintes dados fornecidos pelo
usuário:

Nome
Endereço
cidade
CPF
RG
idade
nome do pai
Nome da mãe
Peso
renda bruta

Apresente as informações solicitadas no final do cadastro.
*/

let nome, endereço, cidade, cpf, rg, idade , nomedopai, nomedamae, peso, rendabruta;

nome= prompt('Digite seu nome:');
endereço= prompt('Digite seu endereço:');
cidade= prompt('Digite sua cidade:');
cpf= prompt('Digite sue CPF:');
rg= prompt ('Digite seu RG:');
idade= prompt('Digite sua idade:');
nomedopai= prompt('Pai:')
nomedamae= prompt ('Mãe:');
peso=  prompt('Digite seu peso:');
rendabruta= prompt('Digie sua renda:');

console.log('Sua ficha:');


console.log ('Nome:', nome);
console.log ('Endereço:', endereço);
console.log ('Cidade:', cidade);
console.log ('CPF:', cpf);
console.log ('RG:', rg);
console.log ('Idade:', idade);
console.log ('Pai:', nomedopai);
console.log ('Mãe', nomedamae);
console.log ('Peso:', peso);
console.log ('Renda:', rendabruta,'R$');