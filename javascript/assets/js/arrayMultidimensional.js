// ARRAY'S Multidimensional

let listaCoisas = Array();
// Indicando os indices
listaCoisas["Frutas"] = Array(); // array
listaCoisas["Frutas"][0] = "Maça";
listaCoisas["Frutas"][1] = "Limão";
listaCoisas["Frutas"][2] = "Laranja";

listaCoisas["Nomes"] = Array(); // array
listaCoisas["Nomes"][0] = "Thiago";
listaCoisas["Nomes"][1] = "Barreto";
listaCoisas["Nomes"][2] = "Clemente";

listaCoisas["Animes"] = ["Naruto", "Boruto", "SamuraiX"]; //array
console.log(listaCoisas);
console.log(listaCoisas["Frutas"][0]);
console.log(listaCoisas["Nomes"][0]);
console.log(listaCoisas["Animes"][0]);