class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return new Veiculo(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {   
        console.log(`Modelo: ${this.modelo}, Placa: ${this.marca}, Cor: ${this.cor}, Número de rodas: ${this.numeroRodas}`);
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, partidaEletrica) {
        super(modelo, marca, cor, numeroRodas);
        this.partidaEletrica = partidaEletrica;
    }

    clone() {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.partidaEletrica);
    }
}

class Aplicação {
    constructor() {
        this.veiculos = [];
    }

    criarVeiculos() {
        const carro1 = new Carro('Sedan', 'Honda', 'preto', 4, 4);
        const carro2 = new Carro('SUV', 'Nissan', 'azul', 4, 4);
        const carro3 = new Carro('Ratch', 'Hyundai', 'branco', 4, 3);
        const moto1 = new Moto('Street', 'Honda', 'Preto', 2, true);
        const moto2 = new Moto('Off Road', 'Suzuki', 'Cinza', 2, false);
        const moto3 = new Moto('Esportiva', 'BMW', 'azul', 2, true);

        this.veiculos.push(carro1, carro2, carro3, moto1, moto2, moto3);
    }

    clonarVeiculos() {
        const veiculosClonados = this.veiculos.map(veiculo => veiculo.clone());
        return veiculosClonados;
    }
}

const app = new Aplicação();
app.criarVeiculos();

const veiculosClonados = app.clonarVeiculos();

console.log('Veículos originais: ');
app.veiculos.forEach(veiculo => veiculo.represent());
console.log('\nVeículos clonados: ');
veiculosClonados.forEach(veiculo => veiculo.represent());