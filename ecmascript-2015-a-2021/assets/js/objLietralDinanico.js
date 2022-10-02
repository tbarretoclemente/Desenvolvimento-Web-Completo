// OBJETOS LITERAIS DINÂMICOS

let pessoa = {
    nome : "Thiago Barreto Clemente",
    idade : 30
}

pessoa.sexo = "masculino";

pessoa.dizerOi = () =>{
    console.log("Oiii")
}

console.log(pessoa)
pessoa.dizerOi();