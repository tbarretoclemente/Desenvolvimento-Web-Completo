// MENU MOBILE

// RECUPERANDO CLASSES CSS

const btnMobile = document.querySelector(".icone");
const containerMenu = document.querySelector(".container--Menu");

// Adicionando Abre e Fecha
btnMobile.addEventListener("click", () =>{
    containerMenu.classList.toggle("show--Menu");
});


// CLASS DESPESA

class Despesa {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.anoID = ano;
        this.mesID = mes;
        this.diaID = dia;
        this.tipoID = tipo;
        this.descricaoID = descricao;
        this.valorID = valor;
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


class BancoDeDados {
    constructor(){
        let keyId = localStorage.getItem("id");
        if(keyId === null ){
            localStorage.setItem("id", 0);
        }
    }

    // Metodo

    getKeyId(){
        let getKeyId = localStorage.getItem("id");
        return parseInt(getKeyId) + 1;
    }

    setLocalStorage = (getValorInput) =>{
        let keyId = this.getKeyId();
        localStorage.setItem(keyId, JSON.stringify(getValorInput));
        localStorage.setItem("id", keyId)
    }


    consultaDadosLista(){
        let arrayDespesa = [];
        // console.log("Metodo para recuperar valores do local storage");

        let consultaId = localStorage.getItem("id");
        for(let i = 1; i <= consultaId; i++){
            let consultaDespesa = JSON.parse(localStorage.getItem(i));
            
            if(consultaDespesa === null){
                continue;
            }
            arrayDespesa.push(consultaDespesa);
            // console.log(consultaDespesa);
        }
        return arrayDespesa;
    }
}

let bancoDeDados = new BancoDeDados();
// RECUPERANDO VALORES DOS INPUT'S

// CADASTRO 

let valoresInputs = () =>{
    const areaInput = {
    ano : document.getElementById("anoId").value,
    mes : document.getElementById("mesId").value,
    dia : document.getElementById("diaId").value,
    tipo : document.getElementById("tipoId").value,
    descricao : document.getElementById("descricaoId").value,
    valor : document.getElementById("valorId").value
    }
    
    let getValores = new Despesa(
        areaInput.ano,
        areaInput.mes,
        areaInput.dia,
        areaInput.tipo,
        areaInput.descricao,
        areaInput.valor);
    
    bancoDeDados = new BancoDeDados();
    
    
    // VALIDANDO DADOS RECEBIDOS
    if(getValores.validarDados()){
        bancoDeDados.setLocalStorage(getValores);
        console.log(`Dados Válidos`);
        alert(`Dados Válidos`);
        
    }else{
        console.log(`Dados Inválidos`)
        alert(`Dados Inválidos`);
    }
}


// CONSULTA
let consultaLista = () =>{
    let despesas = [];
    despesas = bancoDeDados.consultaDadosLista();
    let listaDespesas = document.getElementById("listaDespesas");

    despesas.forEach(function(d){
        // console.log(d);

        // criando linha
        let linha = listaDespesas.insertRow(0);

        // criando colunas
        linha.insertCell(0)
        linha.insertCell(1)
        linha.insertCell(2)
        linha.insertCell(3)
    });
}
