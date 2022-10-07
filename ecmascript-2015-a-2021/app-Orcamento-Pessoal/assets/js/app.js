// MENU MOBILE

// RECUPERANDO CLASSES CSS

const btnMobile = document.querySelector(".icone");
const containerMenu = document.querySelector(".container--Menu");

// Adicionando Abre e Fecha
btnMobile.addEventListener("click", () =>{
    containerMenu.classList.toggle("show--Menu");
});



// Class Servidor

// class Servidor {
//     constructor(ano,mes,dia,tipo,descricao,valor){
//         this.anoID = ano;
//         this.mesID = mes;
//         this.diaID = dia;
//         this.tipoID = tipo;
//         this.descricaoID = descricao;
//         this.valorID = valor;
//     }
// }


class Servidor {
    constructor(){}
    // METODO

    getValoresInput(dados){
        console.log(dados);
        return dados;
    }
}


// RECUPERANDO VALORES DOS INPUT'S


const valoresInputs = document.getElementById("btnAdd");
// valoresInputs.addEventListener("click", ()=>{
//     let ano = document.getElementById("anoId").value;
//     let mes = document.getElementById("mesId").value;
//     let dia = document.getElementById("diaId").value;
//     let tipo = document.getElementById("tipoId").value;
//     let descricao = document.getElementById("descricaoId").value;
//     let valor = document.getElementById("valorId").value;

//     console.log(ano,mes,dia,tipo,descricao,valor)
// });

valoresInputs.addEventListener("click", ()=>{
    const areaInput = {
    ano : document.getElementById("anoId").value,
    mes : document.getElementById("mesId").value,
    dia : document.getElementById("diaId").value,
    tipo : document.getElementById("tipoId").value,
    descricao : document.getElementById("descricaoId").value,
    valor : document.getElementById("valorId").value
    }

    let getValores = new Servidor()
    getValores.getValoresInput(areaInput);
    // console.log(areaInput);
});
