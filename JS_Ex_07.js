/* Com base no que estudamos, escolha dois objetos materiais e dois abstratos. 
Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. 
Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.*/



// Objeto Material 1 // 

const carro = {
    marca: "Ford",
    modelo: "Fusion-Sedan",
    anoFabricacao: 2017,

ligar: function (){
    console.log("veiculo ligado!");
},
acelerar: function (){
console.log("Acelerando veiculo...");
},
desligar: function (){
    console.log("Desligando veiculo...")
}
}

carro.ligar();  
carro.acelerar();  
carro.desligar();


// Objeto Material 2 //

const Game = {
    Nome: "APEX LEGENDS",
    editora: "EA GAMES ",
    AnoDeLançamento: 2019,

abrir: function (){
    console.log("Executando aplicativo")
},
Jogar: function () {
    console.log("aplicativo pronto para execução...")
},
fechar: function () {
    console.log("Fechando aplicativo")
}
}

livro.abrir();  
livro.Jogar();    
livro.fechar(); 


// Objeto Abstrato 1 //

const email = {
    endereco: "Gennetonbarros@hotmail.com",
    mensagensLidas: 0,
    mensagensNãoLidas: 488,

NaoLidas: function () {
    this.mensagensNãoLidas++;
},
MensagemEnviada: function (pessoa, mensagem) {
    console.log(`Sua mensagem foi enviada para ${pessoa}: ${mensagem}.`)
},
CaixaDeEntrada: function () {
    console.log(`Este endereço de e-mail ${this.endereco}.`);
    console.log(`Mensagens lidas: ${this.mensagensLidas}.`);
    console.log(`Mensagens não lidas: ${this.mensagensNãoLidas}.`);
}
}

email.NaoLidas();  
email.MensagemEnviada("Olá, Boa tarde. Agradeço pelo email, retornarei mais tarde com noticias.");  
email.CaixaDeEntrada();  


// Objeto Abstrato 2 //


const ListaSupermercado = {
    ObjetoTotal: 5,
    ObjetoAdicionado: 2,
    ObjetoEmFalta: 3,

adicionarlista: function () {
    this.ObjetoTotal++;
    this.ObjetoEmFalta++;
    console.log("Mais um objeto foi adicionado!");
},
concluirlista: function () {
    if (this.ObjetoEmFalta > 0) {
      this.ObjetoAdicionado++;
      this.ObjetoEmFalta--;
      console.log("Você Concluiu a lista!");
    } else {
      console.log("Você concluiu todas as listas!! ");
    }
  },
 listarlistas: function () {
    console.log(`Suas listas: ${this.ObjetoTotal}`);
    console.log(`Objetos finalizados : ${this.ObjetoAdicionado}`);
    console.log(`Objeto em falta: ${this.ObjetoEmFalta}`);
  }
}

ListaSupermercado.adicionarlista(); 
ListaSupermercado.concluirlista();   
ListaSupermercado.listarlistas();