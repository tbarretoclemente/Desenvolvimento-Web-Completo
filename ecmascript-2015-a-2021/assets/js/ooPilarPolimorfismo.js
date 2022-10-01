// PILAR DO POLIMORFISMO


class Animal {
    constructor(cor, tamanho, peso){
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
    }

    // METODO 

    dormir(){
        console.log(`Dormir`);
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso){
        super(bico, cor, tamanho, peso);
        
        this.bico = bico;
    }
    
    // METODO
    
    voar(){
        console.log(`Voar`);
    }
}

class Papagaio extends Passaro{
    constructor(bico, sabeFalar, cor, tamanho, peso){
        super(bico, sabeFalar, cor, tamanho, peso)

        this.sabeFalar = sabeFalar;
    }
    
    // METODO
    
    falar(){
        console.log(`Sabe Falar`);
    }
}


class Aveztruz extends Passaro{
    constructor(){
        super("Grande", "Preto e Branco", 1, 30);
    }
    
    enterrarCabeca(){
        console.log(`Enterrar Cabeça`);
    }

    // Polimorfismo do metodo voar herdado

    voar(){
        return false;
    }
}

let papagaio = new Papagaio("Médio", true, "Verde", 25, 350);
console.log(papagaio);

let aveztruz = new Aveztruz();
console.log(aveztruz);
console.log(aveztruz.voar())