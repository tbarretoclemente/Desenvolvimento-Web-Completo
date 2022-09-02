// ARRAY

let listaFrutas = [];
listaFrutas[0] = "Laranja";
listaFrutas[1] = "Uva";
console.log(listaFrutas);

// incluir elemento no final do array
listaFrutas.push("Melão");
console.log(listaFrutas);

// incluir elemento no incio do array
listaFrutas.unshift("Pera");
console.log(listaFrutas);

// excluir elemento no final do array
listaFrutas.pop();
console.log(listaFrutas);
// excluir elemento no inicio do array
listaFrutas.shift();
console.log(listaFrutas);


let listaCoisas = []
listaCoisas["Frutas"] = [];
listaCoisas["Nomes"] = [];

listaCoisas["Frutas"].push("Melância");
listaCoisas["Frutas"].unshift("Laranja");
listaCoisas["Frutas"].push("Limão");
listaCoisas["Frutas"].push("Melão");
listaCoisas["Nomes"].unshift("Thiago");
listaCoisas["Nomes"].push("Barreto");
listaCoisas["Nomes"].push("Clemente");
console.log(listaCoisas);