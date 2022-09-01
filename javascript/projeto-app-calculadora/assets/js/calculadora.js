// APP CALCULADORA


function calcular(tipo,valor){
    let castingValor = Number(valor);
    if(tipo === "acao"){
        limpaDisplay(valor);
        operacacoes(valor);
    }else if(tipo === "valor"){
        let valorCampo = document.getElementById("resultado").value;
        document.getElementById("resultado").value += valor;
    }
}

function limpaDisplay(valor){
    if(valor === "c"){
        document.getElementById("resultado").value = "";
    }
}

function operacacoes(valor){
    if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "."){
        document.getElementById("resultado").value += valor;
    }else if(valor === "="){
       let valorCampo = eval(document.getElementById("resultado").value);
       document.getElementById("resultado").value = valorCampo;
    }
}