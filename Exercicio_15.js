/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto.
Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. 
Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, 
aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */ 

const prompt = require("prompt-sync")();

let candidato_X = 889
let candidato_Y = 847
let candidato_Z = 515
let parar = false
let nulo = 0

let x = 0
let y = 0
let z = 0

while(!parar){
    voto = parseInt(prompt("Digite o numero do candidato:"))
    while(isNaN(voto)){ 
        voto = parseInt(prompt("Digite apenas caracteres numericos."))
    }  
        
    if(voto == 889) x++;
    else if(voto == 847) y++;
    else if(voto == 515) z++;
    else nulo++;

    parar = parseInt(prompt("Deseja finalizar a votação? Digite 1-sim ou 0-não: "));
    if(parar){
        switch(Math.max(x,y,z,nulo)){
            case(x):
                console.log(`Vencedor X com ${x} votos.`)
                break;
            case(y):
                console.log(`Vencedor Y com ${y} votos.`)
                break;
            case(z):
                console.log(`Vencedor Z com ${z} votos.`)
                break;
            default:
                console.log("vencedor inexistente.")
        }
        console.log("Resultado:")
        console.log("Candidato X: "+x)
        console.log("Candidato Y: "+y)
        console.log("Candidato Z: "+z)
        console.log("Nulos e brancos: "+nulo)
    }     
  }