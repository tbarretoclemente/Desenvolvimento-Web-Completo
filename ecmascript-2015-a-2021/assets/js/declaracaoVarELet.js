// Escopos GLOBAL, FUNÇÂO E BLOCO

// escopo global

var serie = "Fate of Dragon";

// Representação dos escopos

// function x(){

//     var serie = "Game of Thrones";
//     console.log(`Escopo da função ${serie}`);
    
//     if(true){
//         console.log(`Escopo de bloco ${serie}`);
//     }
// }

// x();

// if(true){
//     console.log(`Escopo global ${serie}`);
// }


if(true){
    let nome = "Thiago Barreto Clemente";
    console.log(`Escopo da função : ${nome}`);

    var nome2 = "Thiago Barreto Clemente";
}

// console.log(`Fora do escopo da função Usando Let: ${nome}`); // error
console.log(`Fora do escopo da função Usando Var: ${nome2}`);