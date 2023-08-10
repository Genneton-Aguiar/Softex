var terrestre = prompt("Seu veiculo é terrestre?");
if(terrestre === "sim") {
  let capacete = prompt ("usa capcacete?");
  if (capacete === "sim"){
    console.log("Seu veiculo é moto.");
  }
  else if (capacete==="não"){
    let somenteUmaPessoa = prompt("Cabe somente uma pessoa?");
    if(somenteUmaPessoa=== "sim") {
      let peso= prompt("É um veiculo pesado?");
      if (peso=== "sim"){
        console.log ("Seu veiculo é um trator.");
  }
      else if (peso==="não"){
        let pedal= prompt("Possui pedaleiras?");
        if(pedal==="sim"){
          console.log("Seu veiculo é uma bicicleta.")
      }
        else if (pedal==="não"){
          console.log ("Desculpe, o veiculo que voce procura não existe aqui")
}
  }
}
  }
}