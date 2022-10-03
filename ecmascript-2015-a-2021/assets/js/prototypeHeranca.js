// OBjeto literal

// __proto__: attr = herança 

let animal = {
    atributo1 : "a"
}

let vertebrado = {
    __proto__: animal,
    atributo2 : "b"
    
}

let ave = {
    __proto__: vertebrado,
    atributo3 : "c",

}

console.log(ave.atributo2, ave.atributo1, ave.atributo3)