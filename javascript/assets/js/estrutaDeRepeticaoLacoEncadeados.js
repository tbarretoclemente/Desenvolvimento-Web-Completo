// ESTRUTURA DE LAÇOS ENCADEADOS


let numeroTabuada = 1;
let multiplicador = 20;

// for(let rFor = 1; rFor <= 10; rFor++){
//     console.log(`1 x ${rFor} = ${rFor * 1}`);
// }

for(let rFor = 1; rFor <= multiplicador; rFor++){
    document.write(`${numeroTabuada } x ${rFor} = ${rFor * numeroTabuada}<br>`)
}

// function tabuada(numero,multiplicador){
//     for(let rFor = 1; rFor <= multiplicador; rFor++){
//         document.write(`${numero} x ${rFor} = ${rFor * numero}<br>`);
//     }
// }

// tabuada(2,10);
// tabuada(numeroTabuada,multiplicador);

// MULTIPLAS TABUADAS

// for(let rForY = numeroTabuada; rForY <= multiplicador; rForY++){
//     for(let rForX = numeroTabuada; rForX <= multiplicador; rForX++){
//         document.write(`${rForY} x ${rForX} = ${rForY * rForX}<br>`);
//     }
//     document.write("<hr>")
// }