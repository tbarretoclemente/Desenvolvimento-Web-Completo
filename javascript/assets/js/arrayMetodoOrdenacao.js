// ARRAY ORDENAÇÃO

let listaFrutas = [];

listaFrutas[0] = "Pera";
listaFrutas[1] = "Limão";
listaFrutas[2] = "Maçã";
listaFrutas[3] = "Kiwi";
listaFrutas[4] = "Abacaxi";
listaFrutas[5] = "Uva";
listaFrutas[5] = "Banana";

console.log(listaFrutas);
console.log(listaFrutas.sort());


let listaNumero = [];
listaNumero[0] = 12;
listaNumero[1] = 22;
listaNumero[2] = 41;
listaNumero[3] = 23;
listaNumero[4] = 14;
listaNumero[5] = 1;
listaNumero[6] = 6;
listaNumero[7] = 250;

console.log(listaNumero);
console.log(listaNumero.sort(function (a,b){return a - b}));
console.log(listaNumero.sort(ordenaArray));
function ordenaArray(a,b){
    return a - b;
}
