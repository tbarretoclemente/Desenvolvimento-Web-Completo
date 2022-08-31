// EVENTOS MAIS USADOS PELO DOM PARA SELECIONAR TAG'S
// getElementById()
// getElementByTagName()
// getElementByClassName()
// getElementByName()


// MANIPULANDO VALORES COM DOM
function recuperaValor() {
    // selecionando valor do ID
    // let caracter = document.getElementById("entrada").value;
    //limpar campo do ID
    // document.getElementById("entrada").value = "";
    // limpar espaços nas extremidades
    // caracter.trim();
    // console.log(caracter);

    // switch(caracter){
    //     case "0":
    //     case "1":
    //     case "2":
    //     case "3":
    //     case "4":
    //     case "5":
    //     case "6":
    //     case "7":
    //     case "8":
    //     case "9":
    //         document.getElementById("numeros").value += caracter;
    //         break;
    //     default:
    //         document.getElementById("letras").value += caracter;
    //         break;    
    // }
}


function adicionarItem() {
    let addItem = document.getElementById("addItem").value;
    let addQtd = document.getElementById("addQtd").value;

    console.log(`Nome do item: ${addItem}\nQuantidade: ${addQtd}`);

    // Limpar ID'S
    limparCampos();

    function limparCampos() {
        document.getElementById("addItem").value = "";
        document.getElementById("addQtd").value = "";
    }

    // document.getElementById("display").innerHTML = `${addItem} - ${addQtd}`;
    // document.getElementsByTagName("p").innerHTML = `${addItem} - ${addQtd}`;
    // document.getElementById("display--1").innerText = `${addItem} - ${addQtd}`;
}