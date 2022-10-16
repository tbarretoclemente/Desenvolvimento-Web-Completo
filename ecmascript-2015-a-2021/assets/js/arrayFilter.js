// ARRAY FILTER

let arryFuncionarios = [
    {
        sigla : "tbc",
        cargo : "Analista De Sistemas",
        salario : 3500,
        status : "Ativo"
    },
    {
        sigla : "thc",
        cargo : "Analista De Dados",
        salario : 4500,
        status : "Ativo"
    },
    {
        sigla : "xpto",
        cargo : "Analista De Infraestrutura",
        salario : 1500,
        status : "Ativo"
    },
    {
        sigla : "xpti",
        cargo : "Analista De Infraestrutura",
        salario : 1500,
        status : "Inativo"
    },
    {
        sigla : "xptii",
        cargo : "Analista De Infraestrutura",
        salario : 1500,
        status : "Inativo"
    },
    {
        sigla : "xpty",
        cargo : "Analista De DataCenter",
        salario : 5500,
        status : "Inativo"
    },
    {
        sigla : "xptg",
        cargo : "Programador Sênior",
        salario : 7500,
        status : "Inativo"
    },
    {
        sigla : "xptj",
        cargo : "Programador Júnior",
        salario : 1800,
        status : "Ativo"
    },

];

// console.log(arryFuncionarios);
let teste =  arryFuncionarios.filter(function(f){
    let verificaSalario = f.salario <= 2000;
    return verificaSalario;
});

let teste1 = arryFuncionarios.filter((f) =>{
    let verificaStatus = f.status === "Inativo";
    return verificaStatus;
});

let teste2 = arryFuncionarios.filter((f) =>{
    let verificaCargo = f.cargo == "Analista De Infraestrutura";
    return verificaCargo;
}).filter((f) =>{
    return f.status == "Inativo";
});
console.log(teste);
console.log(teste1);
console.log(teste2);