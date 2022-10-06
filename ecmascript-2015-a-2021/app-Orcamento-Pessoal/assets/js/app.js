// // GET CLASS
// MENU MOBILE

const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

// SET CLASS
bar.addEventListener("click", function(){
    menu.classList.toggle("show--Menu");
});



// RECUPERANDO VALORES DOS INPUTS

let valorInput = () =>{
    let ano = document.getElementById("anoId").value;
    let mes = document.getElementById("mesId").value;
    let dia = document.getElementById("diaId").value;
    
}