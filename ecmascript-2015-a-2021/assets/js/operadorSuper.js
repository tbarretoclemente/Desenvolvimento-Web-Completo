// OPERADOR SUPER


class Animal {
    constructor(cor, tamanho, peso){
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
    }

    // METODOS

    dormir(){
        console.log(`Dormir`);
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso)
        this.bico = bico;
    }
    // METODOS
    voar(){
        console.log(`Voar`);
    }
}

class Papagaio extends Passaro {
    constructor(bico, sabeFalar, cor, tamanho, peso){
        super(bico, cor, tamanho, peso)
        this.sabeFalar = sabeFalar;
    }

    // METODOS
    falar(){
        console.log(`Sabe Falar`);
    }
}


let papagaio = new Papagaio("Médio",true, "Verde", 25, 350);

document.write(`Classe Aninal Cor: ${papagaio}`);
console.log(papagaio);