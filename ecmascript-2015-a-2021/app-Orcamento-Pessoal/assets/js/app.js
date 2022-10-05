// Classe Despesas

class Despesas {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }
}


class BancoDeDados {
    constructor(){
        let id = localStorage.getItem("id")
        if(id === null){
            localStorage.setItem("id",0);
        } 
    }

    getId(){
        let proximoId = localStorage.getItem("id");
        return parseInt(proximoId);
    }

    gravar(d){
        let id = this.getId()
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem("id", id);
    }
}

let bancoDeDados = new BancoDeDados();

// PEGANDO VALORES DOS INPUTS

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function(){
    let vI = {
        
        ano : document.getElementById("anoId").value,
        mes : document.getElementById("mesId").value,
        dia : document.getElementById("diaId").value,
        tipo : document.getElementById("tipoId").value,
        descricao : document.getElementById("descricaoId").value,
        valor : document.getElementById("valorId").value
    }
    
    let despesas = new Despesas(vI);
    bancoDeDados.gravar(despesas);
    limpaCampo(vI);
    console.log(despesas);
    
});


let limpaCampo = (valor) =>{
    return valor = [
        document.getElementById("anoId").value = "",
        document.getElementById("mesId").value = "",
        document.getElementById("diaId").value = "",
        document.getElementById("tipoId").value = "",
        document.getElementById("descricaoId").value = "",
        document.getElementById("valorId").value = "",
    ]
    
}

// let localStorageInput =  (valorInput) => {
//     localStorage.setItem("despesas", JSON.stringify(valorInput));
// }