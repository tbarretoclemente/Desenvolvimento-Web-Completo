// ESTRUTURA DE REPETIÇÃO FOREACH

// USANDO FUNÇÃO DE CALLBACK

let listaNomes = ["Thiago","Barreto","Clemente"];

// listaNomes.forEach(function(valor,indice,array){
//     console.log(`Indice: ${indice} Valor: ${valor}`);

//     console.log(listaNomes);
// });


let fCallBack = function(valor,indice,array){
    console.log(`Indice: ${indice} ${valor}`);
    document.write(`Indice: ${indice} Valor: ${valor} <br>`);
};
listaNomes.forEach(fCallBack);