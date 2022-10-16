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
            despesa.id = i;
            arrayDespesas.push(despesa);
        }
        return arrayDespesas;
    }


    pesquisarDespesa(despesa){
        let despesasFiltradas = Array();
        despesasFiltradas = this.recuperarTodosRegistros();
        console.log(despesa);
        console.log(despesasFiltradas);
        
        // FILTROS
        if(despesa.ano != ""){
            console.log("Filtro de ano aplicado!!!");
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano);
            limpaCampos()
        }
        if(despesa.mes != ""){
            console.log("Filtro de mes aplicado!!!");
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes);
            limpaCampos()
        }
        if(despesa.dia != ""){
            console.log("Filtro de dia aplicado!!!");
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia);
            limpaCampos()
        }
        if(despesa.tipo != ""){
            console.log("Filtro de tipo aplicado!!!");
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo);
            limpaCampos()
        }
        if(despesa.descricao != ""){
            console.log("Filtro de descricao aplicado!!!");
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao);
            limpaCampos()
        }
        if(despesa.valor != ""){
            console.log("Filtro de valor aplicado!!!");
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor);
            limpaCampos()
        }

        console.log(despesasFiltradas);
        return despesasFiltradas;
    }

    remover(id){
        localStorage.removeItem(id);
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
        bd.gravar(despesa);
        console.log(despesa);
        alert("Despesa Cadastrada com sucesso!!!");
        limpaCampos();
    }else{
        alert("Por favor preencha todos os campos!!!");
    }
    
}


let carregaListaDespesas = (despesas = Array(), filtro = false) => {
    
    if(despesas.length == 0 && filtro == false){
        despesas = bd.recuperarTodosRegistros();
    }
    
    // let arrayDespesas = Array();
    // arrayDespesas = bd.recuperarTodosRegistros();
    

    let listaDespesas = document.getElementById("listaDespesas");
    listaDespesas.innerHTML = "";
    
    despesas.forEach(function(despesas){
        let linha = listaDespesas.insertRow();

        linha.insertCell(0).innerHTML = `${despesas.dia}/${despesas.mes}/${despesas.ano}`;
        linha.insertCell(1).innerHTML = despesas.tipo;
        linha.insertCell(2).innerHTML = despesas.descricao;
        linha.insertCell(3).innerHTML = despesas.valor;
        // exclusão
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
        btn.id = despesas.id;
        btn.onclick = () =>{
            //remove despesa
            // console.log(btn.id);
            bd.remover(btn.id);
            window.location.reload();
        } 

        linha.insertCell(4).append(btn);
        console.log(despesas);
    });


}


let limpaCampos = () =>{
    let limpaCampoInput = [
    document.getElementById("anoId").value = "",
    document.getElementById("mesId").value = "",
    document.getElementById("diaId").value = "",
    document.getElementById("tipoId").value = "",
    document.getElementById("descricaoId").value = "",
    document.getElementById("valorId").value = ""
    ]
}


let pesquisarDespesa = () =>{
    let ano = document.getElementById("anoId").value;
    let mes = document.getElementById("mesId").value;
    let dia = document.getElementById("diaId").value;
    let tipo = document.getElementById("tipoId").value;
    let descricao = document.getElementById("descricaoId").value;
    let valor = document.getElementById("valorId").value;

    let despesa = new Despesas(ano,mes,dia,tipo,descricao,valor);
    let despesas = bd.pesquisarDespesa(despesa);
    carregaListaDespesas(despesas,true); 

}