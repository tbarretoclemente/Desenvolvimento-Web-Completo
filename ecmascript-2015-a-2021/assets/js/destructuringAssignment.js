// ARRAY

// let listaFrutas = ["Pera", "Uva", "Abacaxi"];
// let [p, , a] = listaFrutas;
// let [p,u,a,b = "Banana"] = listaFrutas
// console.log(p,u,a,b);

// console.log("Array's Destructuring");
// let listaCoisas = [["Banana","Melão","Açaí"], ["Thiago", "Maria", "Hinata"]];
// let [[,,a],[,m]] = listaCoisas;
// console.log(a, m); 



// console.log("Objetos Destructuring");


// let produto = {
//     descricao : "Notebook",
//     preco : 2500,
//     detalhes : {
//         fabricante : "abc",
//         modelo : "xpto"
//     }
// }

// let {descricao, preco} = produto;
// let {descricao: d, preco: p} = produto;
// let {detalhes: {fabricante: f, modelo: me}} = produto;
// console.log(f, me); 


// console.log("Funções Destructuring");

// let array = [10,20,30,40];

// function teste([a,b]){
    //     console.log(a,b);
    // }
    
    // teste(array);
    

// let objetoLiteral = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40
// }

// function destructuringObj({a, b}){
//     console.log(a, b)
// }
// destructuringObj(objetoLiteral);

// console.log("Array Destructuring + Spread");

// let listaNumero = [13,14,15,16];
// let [n1, ...resto] = listaNumero;

// console.log(n1);
// console.log(resto);


console.log("Objeto Destructuring + Spread");


let objetoA = {
    a : 25,
    b : 26,
    c : 26,
    d : 28,
}

let {a, ...resto} = objetoA;
console.log(a);
console.log(resto);
