// PILAR DO ENCAPSULAMENTO

let trocaCanal = 122;

class Tv{
    constructor(){
        this._canais = [2,4,5,7,8,10];
        this._canalAtivo = 5;
        this._volume = 10;
    }

    // METODOS GETTERS E SETTERS

    get canalAtivo(){
        return this._canalAtivo;
    }

    set canalAtivo(canal){
        // return this._canalAtivo = canal;
        let verificaCanalAtivo = this._canais.indexOf(canal);
        console.log(`Index do canal: ${verificaCanalAtivo}`); 
        this._canalAtivo = canal;
    }

}

let tv = new Tv();

// tv._canalAtivo = trocaCanal;
tv.canalAtivo = 10;

// console.log(tv);
console.log(`Canal Ativo: ${tv.canalAtivo}`);