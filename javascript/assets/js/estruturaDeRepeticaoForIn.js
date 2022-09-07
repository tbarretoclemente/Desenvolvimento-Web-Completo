// ESTRUTURA DE REPETIÇÃO FORIN

let listaNomes = ["Thiago","Barreto","Clemente"];

for(let rForIn in listaNomes){
    // console.log(rForIn);
    console.log(`Indice: ${rForIn} Valor: ${listaNomes[rForIn]}`);

    document.write(`Indice: ${rForIn} valor: ${listaNomes[rForIn]}<br>`);
}

let listaFrutas = Array();
listaFrutas["a"] = "Uva";
listaFrutas["1"] = "Melão";
listaFrutas["t"] = "Laranja";
listaFrutas["2"] = "Goiaba";

for(let rForIn in listaFrutas){
    console.log(`Indice: ${rForIn} Valor: ${listaFrutas[rForIn]}`);
    document.write(`Indice: ${rForIn} Valor: ${listaFrutas[rForIn]} <br><hr>`);
}