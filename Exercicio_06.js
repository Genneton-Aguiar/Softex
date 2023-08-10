
/*Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não"*/


var terrestre = prompt("Seu veiculo é terrestre?");
if(terrestre === "sim") {
  let capacete = prompt ("Usa capcacete?");
  if (capacete === "sim"){
    console.log("Seu veiculo é moto.");
  }
  else if (capacete==="nao"){
    let somenteUmaPessoa = prompt("Cabe somente uma pessoa?");
    if(somenteUmaPessoa=== "sim") {
      let peso= prompt("É um veiculo pesado?");
      if (peso=== "sim"){
        console.log ("Seu veiculo é um trator.");
  }
      else if (peso==="nao"){
        let pedal= prompt("Possui pedaleiras?");
        if(pedal==="sim"){
          console.log("Seu veiculo é uma bicicleta.")
      }
        else if (pedal==="nao"){
          console.log ("Desculpe, o veiculo que voce procura não existe aqui.")
}
  }
}
  }
}
