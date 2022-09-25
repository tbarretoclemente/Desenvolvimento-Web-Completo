// Paradigma Procedural

// let a = 10, b = 7 , operador = "mult";
// function calcular(a,b,operador){
//     if(operador == "mult"){
//         console.log(a * b);
//         return a * b;
//     }
// }
// document.write(`Procedural: ${calcular(a,b,operador)} <br>`);


// Orientado a Objeto
// class Calculadora{
//     constructor(){
//         this.a = a;
//         this.b = b;
//         this.operador = operador;
//     }

//     calcular(){
//         if(this.operador == "mult"){
//             return this.a * this.b;
//         }
//     }
// }

// let calculadora = new Calculadora();
// document.write(`Orientação a Objeto: ${calculadora.calcular()}`);



// ORIENTAÇÃO A OBJETO PILAR ABSTRAÇÃO

// modelo de Objeto

let agencia = 1020, numeroContaX = 130592, numeroContaY = 920513, saldo = 10, limite = 100;

class ContaBancaria{
    constructor(){
        this.agencia = agencia;
        this.numeroContaX = numeroContaX;
        this.numeroContaY = numeroContaY;
        this.saldo = saldo;
        this.limite = limite;
    }

    // Metodos

    depositar(valorDeposito){
        this.saldo += valorDeposito;
    }

    sacar(valorSaque){
        this.saldo -+ valorSaque;
    }

    consultarSaldo(){
        return this.saldo;
    }
}

let contaBancariaX = new ContaBancaria();
let contaBancariaY = new ContaBancaria();

document.write(`Agência conta X: ${contaBancariaX.agencia} <br>`);
document.write(`Agência conta Y: ${contaBancariaX.agencia} <br><br>`);

document.write(`Conta Y: ${contaBancariaX.numeroContaX} <br>`);
document.write(`Conta Y: ${contaBancariaY.numeroContaY} <br><br>`);


document.write(`Saldo em conta X: ${contaBancariaX.consultarSaldo()} antes do deposito <br>`);
document.write(`Saldo em conta Y: ${contaBancariaY.consultarSaldo()} antes do deposito <br><br>`);
contaBancariaX.depositar(1500);
contaBancariaY.depositar(2500);

document.write(`Saldo em conta X: ${contaBancariaX.consultarSaldo()} após deposito <br>`);
document.write(`Saldo em conta X: ${contaBancariaY.consultarSaldo()} após deposito <br>`);