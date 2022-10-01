// NOTACAO DE CLASSE

class Produto {
    constructor(descricao, preco){
        this.descricao = descricao;
        this.preco = preco;
    }

    // METODO

    verDescrição(){
        console.log(`Nome do produto: ${this.descricao} \nValor do produto: ${this.preco}`);
    }
}

let produto = new Produto("Pc Gamer Razen 5", 2500);
console.log(produto);
produto.verDescrição();
// document.write(`Nome do produto: ${produto.descricao}<br> Valor do produto: ${produto.preco}`);

let produtoLiteral = {
    descricao : "Geladeira",
    preco : 1200,
    verDescrição : function() {
        console.log(`Nome do produto: ${this.descricao} \nValor do produto: ${this.preco}`);

    }
}

console.log(produtoLiteral);
produtoLiteral.verDescrição();