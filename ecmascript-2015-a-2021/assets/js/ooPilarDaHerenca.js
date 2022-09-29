// PILAR DA HERENÇA

// OBJETO

class Animal {
    constructor(){
        this.cor = "Branco e Marrom";
        this.tamanho = null;
        this.peso = null;
    }

    // METODO

    dormir(){
        console.log(`Dormir`)
    }
}


class Cachorro extends Animal{
    constructor(){
        super();
        this.orelhas = "Grande e caídas";
    }

    // METODOS
    
    correr(){
        console.log(`Correr`);
    }

    rosnar(){
        console.log(`Rosnar`);
    }
}

class Passaro extends Animal{
    constructor(){
        super();
        this.bico = "Curto";
    }

    // METODOS

    voar(){
        console.log(`Voar`);
    }
}


class Papagaio extends Passaro{
    constructor(){
        super();
        this.sabeFalar = true;
    }

    // Metodo

    falar(){
        console.log(`Sabe Falar`);
    }
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let pagagaio = new Papagaio();


// cachorro.dormir();
// passaro.dormir()
// pagagaio.falar();


console.log(cachorro);
console.log(pagagaio);
console.log(passaro);