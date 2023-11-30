class Computer {
    getRAM() {}
    getHD() {}
    getCPU() {}
    getType() {}
    toString() {}
}

class PC extends Computer {
    getRAM() {
        return '32 GB';
    }
    getHD() {
        return '2000 GB';
    }
    getCPU() {
        return '2.4 GHz';
    }
    getType() {
        return 'PC';
    }
    toString() {
        return 'Tipo de computador:' + this.getType() + ', ' + 'Memoria RAM: ' + this.getRAM() + ', ' +'HD:' + this.getHD() + ', ' + 'CPU:'+ this.getCPU() + '.';
    }
}

class Server extends Computer {
    getRAM() {
        return '64 GB';
    }
    getHD() {
        return '2000 GB';
    }
    getCPU() {
        return '3.4 GHz';
    }
    getType() {
        return 'Server';
    }
    toString() {
        return 'Tipo de computador:' + this.getType() + ', ' + 'Memoria RAM: ' + this.getRAM() + ', ' +'HD:' + this.getHD() + ', ' + 'CPU:'+ this.getCPU() + '.';
    }
}

class ComputerFactory {
    createComputer(type) {
        switch (type) {
            case 'PC':
                const pc = new PC();
                console.log(pc.toString());
                break;
            case 'Server':
                const server = new Server();
                console.log(server.toString())
                break;
            default:
                console.log('Tipo invalido de computador');
        }
    }
}
const computerFactory = new ComputerFactory();

computerFactory.createComputer('PC');
computerFactory.createComputer('Server');
