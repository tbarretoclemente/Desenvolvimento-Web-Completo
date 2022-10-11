// MENU MOBILE

// RECUPERANDO CLASSES CSS

const btnMobile = document.querySelector(".icone");
const containerMenu = document.querySelector(".container--Menu");

// Adicionando Abre e Fecha
btnMobile.addEventListener("click", () =>{
    containerMenu.classList.toggle("show--Menu");
});

// ==============================================================

class Despesas {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    // METODOS

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == null || this[i] == ""){
                return false;
            }
        }
        return true;
    }
}

class Bd {
    constructor(){
        // Verificando existencia do ID
        let id = localStorage.getItem("id");

        if(id === null){
            localStorage.setItem("id", 0);
        }
    }

    // METODOS
    getProximoId(){
        let proximoId = localStorage.getItem("id");
        return parseInt(proximoId) + 1;
    }

    gravar = (despesas) =>{
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(despesas))
        localStorage.setItem("id", id);
    }


    recuperarTodosRegistros(){
        let arrayDespesas = Array();

        let id = localStorage.getItem("id");

        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i));
            
            if(despesa === null){
                continue;
            }
            
            arrayDespesas.push(despesa);
        }
        return arrayDespesas;
    }
}

let bd = new Bd();


let cadastrarDespesa = () =>{
    let ano = document.getElementById("anoId").value;
    let mes = document.getElementById("mesId").value;
    let dia = document.getElementById("diaId").value;
    let tipo = document.getElementById("tipoId").value;
    let descricao = document.getElementById("descricaoId").value;
    let valor = document.getElementById("valorId").value;

    if(dia == 0 || dia > 31){
        alert("por valor informe um dia válido!!!");
    }

    let despesa = new Despesas(ano,mes,dia,tipo,descricao,valor);
    if(despesa.validarDados()){
        // bd.gravar(despesa);
        console.log(despesa);
        alert("Despesa Cadastrada com sucesso!!!");
    }else{
        alert("Por favor preencha todos os campos!!!");
    }
    
}


let carregaListaDespesas = () => {
    let arrayDespesas = Array();
    arrayDespesas = bd.recuperarTodosRegistros();
    

    let listaDespesas = document.getElementById("listaDespesas");
    
    arrayDespesas.forEach(function(despesas){
        let linha = listaDespesas.insertRow();

        linha.insertCell(0).innerHTML = `${despesas.dia}/${despesas.mes}/${despesas.ano}`;
        linha.insertCell(1).innerHTML = despesas.tipo;
        linha.insertCell(2).innerHTML = despesas.descricao;
        linha.insertCell(3).innerHTML = despesas.valor;
    });
}
