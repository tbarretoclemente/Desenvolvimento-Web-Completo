// MENU MOBILE

// RECUPERANDO CLASSES CSS

const btnMobile = document.querySelector(".icone");
const containerMenu = document.querySelector(".container--Menu");

// Adicionando Abre e Fecha
btnMobile.addEventListener("click", () =>{
    containerMenu.classList.toggle("show--Menu");
});



// RECUPERANDO VALORES DOS INPUT'S


const valoresInputs = document.getElementById("btnAdd");
valoresInputs.addEventListener("click", ()=>{
    let ano = document.getElementById("anoId").value;
    let mes = document.getElementById("mesId").value;
    let dia = document.getElementById("mesId").value;
    let tipo = document.getElementById("tipoId").value;
    let descricao = document.getElementById("descricaoId").value;
    let valor = document.getElementById("valorId").value;
    console.log(valoresInputs);
});
