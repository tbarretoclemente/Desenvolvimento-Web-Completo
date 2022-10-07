// MENU MOBILE

// RECUPERANDO CLASSES CSS

const btnMobile = document.querySelector(".icone");
const containerMenu = document.querySelector(".container--Menu");

// Adicionando Abre e Fecha
btnMobile.addEventListener("click", () =>{
    containerMenu.classList.toggle("show--Menu");
});