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
}

// RECUPERANDO VALORES DOS INPUT'S

const valoresInputs = document.getElementById("btnAdd");
valoresInputs.addEventListener("click", ()=>{
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

    let bancoDeDados = new BancoDeDados();
    
    
    // VALIDANDO DADOS RECEBIDOS
    if(getValores.validarDados()){
        // bancoDeDados.setLocalStorage(getValores);
        console.log(`Dados Válidos`);
        alert(`Dados Válidos`);
        
    }else{
        console.log(`Dados Inválidos`)
        alert(`Dados Inválidos`);
    }
    
    
});

