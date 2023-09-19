const prompt = require("prompt-sync")();


class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

const p1 = new Pessoa("Victor", 23 );
const p2 = new Pessoa("Larissa", 24 );
const p3 = new Pessoa("Gerlayne", 32 );
const p4 = new Pessoa("Gilson", 38);
const p5 = new Pessoa("Luana", 18);



class Lista {
    constructor() {
        this.head = null;
    }

    adicionarPessoa(pessoa) {
        if (!this.head) {
            this.head = pessoa;
        } else {
            let atual = this.head;
            while (atual.filho) {
                atual = atual.filho;
            }
            atual.filho = pessoa;
        }
    }

    listarPessoas() {
        let atual = this.head;
        while (atual) {
            console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            atual = atual.filho;
        }
    }
}
const lista = new Lista();
lista.adicionarPessoa(p1);
lista.adicionarPessoa(p2);
lista.adicionarPessoa(p3);
lista.adicionarPessoa(p4);
lista.adicionarPessoa(p5);

lista.listarPessoas();
