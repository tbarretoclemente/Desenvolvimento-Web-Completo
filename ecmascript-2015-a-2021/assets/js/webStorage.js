// WEB STORAGE


let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () =>{
    let dados = {
        nome : document.getElementById("nomeId").value,
        idade : document.getElementById("idadeId").value
    }

    console.log(dados)
    localStorageBd(dados);
});

let localStorageBd = (dados) =>{
    localStorage.setItem("dados", JSON.stringify(dados));
}