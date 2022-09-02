// ARRAY

let listaFrutas = Array();
listaFrutas[0] = "Maçã";
listaFrutas[1] = "Limão";
listaFrutas[2] = "Goiaba";
listaFrutas[3] = "Kiwi";

let pesquisa = "Maçã"
let pesquisaLista = listaFrutas.indexOf(pesquisa);
if(pesquisaLista === -1){
    console.log(`O elemento não existe na lista !!!`);
}else{
    console.log(`O elemento se encontra na posição ${pesquisaLista} da lista`);
}