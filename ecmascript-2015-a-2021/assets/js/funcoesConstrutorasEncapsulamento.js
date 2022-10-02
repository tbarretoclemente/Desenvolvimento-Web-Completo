// Funções Construtoras Encapsulamento

let Carro = function(){
    // Atributos privado

    let velocidadeMaxima = 220;
    let quilometrosRodados = 0;
    // Atributos público
    this.cor = "Verde";
    this.modelo = "Gol";
    this.velocidadeAtual = 0;

    // Metodos públicos
    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50;
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);
        setQuilometrosRodados(0.07);
    }
    
    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual;
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual;
    }
    
    // Metodo privado
    let setQuilometrosRodados = function(quilometros){
        quilometrosRodados += quilometros;
        console.log(quilometrosRodados);

    }
}


let carro = new Carro()
console.log(carro);
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(carro.getVelocidadeAtual());










