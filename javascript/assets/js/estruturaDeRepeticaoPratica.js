// ARRAY

let listaFrutas = []
listaFrutas[0] = "Uva";
listaFrutas[1] = "Laranja";
listaFrutas[2] = "Jaca";
listaFrutas[3] = "Melão";
listaFrutas[4] = "Figo";

let listaCoisas = ["Leite", "Casa", "Comida","Palavras"];

let rWhile = 0;
document.write("<h2>Usando laço de repetição While</h2>")

while(rWhile < listaFrutas.length){
    console.log(listaFrutas[rWhile]);
    document.write(`${listaFrutas[rWhile]}<br>`);
    rWhile++;
}

document.write("<br><h2>Usando laço de repetição FOR</h2>")

for(let rFor = 0; rFor < listaFrutas.length; rFor++){
    console.log(listaFrutas[rFor]);
    document.write(`${listaFrutas[rFor]}<br>`);
}
document.write("<br><h2>Usando laço de repetição FOR</h2>")

for(let rFor = 0; rFor < listaCoisas.length; rFor++){
    console.log(listaCoisas[rFor]);
    document.write(`${listaCoisas[rFor]} <br>`);
}