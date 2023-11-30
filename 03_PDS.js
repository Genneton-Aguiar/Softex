class SistemaDeSeguranca {
    constructor() {
        this.senha = "senha123";
    }
  
    static getInstance() {
        if (!this.instancia) {
            this.instancia = new SistemaDeSeguranca();
        }
        return this.instancia;
    }
  
    acessarBase(senhaInserida) {
        if (senhaInserida === this.senha) {
            console.log("Acesso concedido à Base Secreta!");
        } else {
            console.log("Acesso negado! Intruso detectado!");
        }
    }
  }
  
  const agente = SistemaDeSeguranca.getInstance();
  
  agente.acessarBase("senha123");
  
  agente.acessarBase("Senha incorreta");