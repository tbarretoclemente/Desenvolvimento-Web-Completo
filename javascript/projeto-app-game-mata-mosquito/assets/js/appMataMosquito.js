// Criar função para buscar valores de altura e largura do body

let altura,largura,posicaoX,posicaoY,vidas = 1, tempo = 10,nivel;
let respawMosquitoGame = 1500;
// function getAlturaLarguraBody(){
//     altura = window.innerHeight
//     largura = window.innerWidth
//     console.log(altura, largura);
// }
//  getAlturaLarguraBody();

 let getAlturaLarguraBody = () =>{
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura,largura)
 }
 getAlturaLarguraBody();


// modificando nivel do jogo
// nivel = window.location.search;
// nivel.replace("?","");
// if(nivel == "normal"){
//     respawMosquitoGame = 1500;
// }else if(nivel == "dificil"){
//     respawMosquitoGame = 1000;
// }else{
//     respawMosquitoGame = 850;
// }



let posicaoRandomica = () =>{

    // remover o mosquito caso já exista
    if(document.getElementById("mosquitoId")){
        document.getElementById("mosquitoId").remove();

        if(vidas > 3){
            window.location.href = "gameover.html";
            
        }else{
            document.getElementById("v" + vidas).src = "assets/image/coracao_vazio.png";
            vidas++;
            
        }
    }
    

    //  Criar posicionamento aleatorios para o mosquito
    posicaoX = Math.floor(Math.random() * largura) - 90;
    posicaoY = Math.floor(Math.random() * altura) -90;

    // console.log(posicaoX,posicaoY);

    posicaoX = (posicaoX < 0) ? 0 : posicaoX;
    posicaoY = (posicaoY < 0) ? 0 : posicaoY;
    
    // Criar elemento html para o mosquito
    let criarMosquito = document.createElement("img");
    criarMosquito.src = "assets/image/mosca.png";

    // Adicionando classe para ajustar img do mosquito
    criarMosquito.className = ajustaTamanhoMosquito() + " " + ladoRandom() ;
    
    
    // Adicionando style para o posicionamento da img mosquito
    criarMosquito.style.left = posicaoX + "px";
    criarMosquito.style.top = posicaoY + "px";
    criarMosquito.style.position = "absolute";

    // Criar ID especifico para mosquito
    criarMosquito.id = "mosquitoId";
    
    // Remove mosquito quando clicado
    criarMosquito.onclick = function(){
        this.remove();
    }


    document.body.appendChild(criarMosquito);
}

let ajustaTamanhoMosquito = () =>{
    let tamanhoMosquito = Math.floor(Math.random() * 3);
    // console.log(tamanhoMosquito);

    if(tamanhoMosquito === 0){
        return "mosquito--1";
    }else if(tamanhoMosquito === 1){
        return "mosquito--2"
    }else{
        return "mosquito--3"
    }
}


let ladoRandom = () =>{
    let ladoAleatorio = Math.floor(Math.random() * 2);
    // console.log(ladoAleatorio);
    if(ladoAleatorio === 0){
        return "lado--Left";
    }else{
        return "lado--Right";
    }
}

let respawMosquito = () => {
    let criarMosquitoRespaw = setInterval(function(){
        posicaoRandomica();

    }, respawMosquitoGame);

}

let resetGame = () =>{
    return window.location.href = "index.html";
}

let cronometro = () =>{

    let cronometro = setInterval(function(){
        tempo--;
    
        if(tempo < 0){
            clearInterval(cronometro);
            clearInterval(respawMosquito());
            window.location.href = "win.html";
            
        }else{
            document.getElementById("cronometro").innerHTML = tempo;
        }
    }, 1000);
}


let starGame = () => {
    nivel = document.getElementById("nivel").value;
    if(nivel === ""){
        alert(`Por favor selecione um nível para começar!!!`);
        return false;
    }
    
    window.location.href = "appMataMosquito.html";
}

