// 

// Objeto literal

let aviaoA = {
    cor : "Branco",
    modelo : "Airbus a380",
    voo(){
        console.log(`Levantar Voo`);
    }
}

// Function Construtora

let AviaoB = function(){
    // Atributos Públicos
    this.cor = "Branco",
    this.modelo = "Boeing 787",
    
    // Metodo póblico
    this.voo = function(){
        console.log(`Levantar Voo`); 
    }
}

let aviaoBoing = new AviaoB();

// Class

class AviaoC {
    constructor(){
        this.cor = "Vermelho",
        this.modelo = "Embraer E-Jets"
    }

    // Metodos

    voo(){
        console.log(`Levantar Voo`);
    }
}

let aviaoJets = new AviaoC();

console.log(aviaoA, aviaoBoing, aviaoJets);