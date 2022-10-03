// FUNÇÕES FACTORY CONCEITO

// let Bicicleta = {
//     cor : "Branca",
//     marcha : "Única",
//     pedalar(){
//         console.log(`Pedalar`);
//     }
// }

// console.log(Bicicleta);

// // Func Factory

// let BicicletaFactory = function(cor, marcha, aro){
//     return{
//         cor,
//         marcha,
//         aro,
//         pedalar(){
//             console.log(`Pedalar`);
//         }
//     }
// }

// let Bicicleta1 = BicicletaFactory("azul", 25, 28);

// console.log(Bicicleta1);
// // Bicicleta1.pedalar();

// let Bicicleta2 = BicicletaFactory("vermelha",21, 25);


let btnEnviar = document.getElementById("btnEnviar")
btnEnviar.addEventListener("click", function(){
    let cor = document.getElementById("corId").value;
    let marcha = document.getElementById("marchaId").value;
    let aro = document.getElementById("aroId").value;

    let bike = Bicicleta(cor,marcha,aro);
    let bikeJ = JSON.stringify(bike)
    display(bikeJ);
    console.log(bike);

});

let Bicicleta = function(cor,marcha,aro){
    return{
        cor,
        marcha,
        aro,
        pedalar(){
            console.log(`Pedalar`);
        }
    }
}


let display = (bike) =>{
    let display = document.querySelector(".display")
    display.innerHTML = `Bike: ${bike}`;
}