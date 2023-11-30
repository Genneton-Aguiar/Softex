class sanduiche{
  
       getName() {return this.name;};
       valor (){};
    
}

class AdicionalDecorator extends sanduiche{

}

class FrangoAssado extends sanduiche{
getName() {
    return 'Frango assado'
}
valor() {
    return 4.50
}
}

class Pepperoni extends AdicionalDecorator{
    constructor(sanduiche){
this.sanduiche=sanduiche;
    }
    getName(){
        return this.sanduiche.getName()+ 'Adicional Peperoni'
    }

    valor(){
        return `Total: R$ ${0.99 + this.sanduiche.valor()}`
    }
}

class Mussarela extends AdicionalDecorator{
constructor (sanduiche){
super(AdicionalDecorator);
this.sanduiche= sanduiche;
}

getName(){
    return this.sanduiche.getName() + ' + Adicional Mussarela'
}

valor(){
    return `Total: R$ ${2.00+this.sanduiche.valor()}`
}
}


console.log('Sanduiche de carne, bacon, Mussarela ralada = R$ 7,49.')

let frangoAssado= new FrangoAssado();
frangoAssado= new Mussarela(frangoAssado)
console.log(frangoAssado.getName());
console.log(frangoAssado.valor());