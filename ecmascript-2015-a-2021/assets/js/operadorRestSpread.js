// SPREAD = ESPALHAR

// string 

// let tituloArtigo = `Como utilizar o operador spread`;
// console.log(tituloArtigo);
// console.log(...tituloArtigo);
// console.log([...tituloArtigo]);

// array's

// let listaCuros1 = ["Html","Css","JavaScript"];
// let listaCuros2 = ["C#", "C++", "Ruby"];
// let listaCurosCompleta = [...listaCuros1,"Web Completo", "Php7", "Msql",...listaCuros2];

// console.log(listaCurosCompleta);


// OBJECT

// let pessoa = {
//     nome : "Thiago Barreto Clemente",
//     idade : 30
// }
// let clonePessoa = {
//     endereco : "Qe 40 rua 22 polo de modas Guara II",
//     ...pessoa
// }

// console.log(clonePessoa);


// REST = Juntar

function soma(...param){
    let resultado = 0;
    console.log(param);

    param.forEach(valores => resultado += valores);
    return resultado;
}

console.log(soma(10,3,8,5,7));

function multi(m, ...p){
    console.log(m);
    let resultado = 0;
    console.log(p);
    
    p.forEach(valores => resultado += m * valores);

    return resultado;
}

console.log(multi(5,10,22,33,28,58));






