// OBJETOS LITERAIS UNICOS

let pessoa = {
    nome : "Thiago Barreto Clemente",
    idade : 30,
    dizerOi(){
        console.log("Olá Tudo Bem");
    }
}

let assinatura = {
    idCliente : 1305,
    descricaoServico : "Internet",
    status(){
        console.log("Serviço em andamento");
    }
}


let x = pessoa;
let y = assinatura;
console.log(x);
console.log(y.descricaoServico);