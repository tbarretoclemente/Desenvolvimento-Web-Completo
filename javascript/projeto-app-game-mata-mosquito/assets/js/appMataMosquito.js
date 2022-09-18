// Altura e Largura da pagina
// 1 - criar variaveis para guardar localização da altura e largura
// 2 - criar função para ajusta de acordo com a tela
// 3 - chamar função 
// 4 - adicionar no body atributo "onresize" para atualizar altura e largura

let altura = 0,
    largura = 0,
    pontosDeVida = 1,
    tempo = 10+1,
    respaw = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?","");

if(nivel == "normal"){
    respaw == 1500;
}else if(nivel == "dificil"){
    respaw == 1000;
}else if(nivel == "chucknorris"){
    respaw == 750;
}

    function ajusteAlturaLargura() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    // console.log(altura, largura);
}
ajusteAlturaLargura();


// Cronometro

let cronometro = setInterval(function(){
    tempo--;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(temporizador);
        window.location.href = "winner.html";
    }else{
        document.getElementById("cronometro").innerHTML = tempo;
    }

},1000);


function posicaoRandomica() {

    // Caso exista o ID mosquitoId, remover o elemento criado anteriormente
    let verificaMosquito = document.getElementById("mosquitoId");
    if(verificaMosquito){
        document.getElementById("mosquitoId").remove()
        
        // Controle de pontos de vida
        if(pontosDeVida > 3){
            window.location.href = "gameover.html";
        }else{

            document.getElementById("vidas--" + pontosDeVida).src = "assets/image/coracao_vazio.png";
            pontosDeVida++;
        }
    }

    

    // Criação de posição randomica
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    // Verifica se possição é negativa
    posicaoX = (posicaoX < 0) ? 0 : posicaoX;
    posicaoY = (posicaoY < 0) ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    // Criação do elemento html mosquito
    let criarMosquito = document.createElement("img");
    criarMosquito.src = "assets/image/mosca.png";
    criarMosquito.className = ajusteTamanhoMosquito() + " " + ladoRandom(); 

    // Acessando Style left e top
    criarMosquito.style.left = posicaoX + "px";
    criarMosquito.style.top = posicaoY + "px";
    criarMosquito.style.position = "absolute";


    // Id de verificação do elemento mosquito
    criarMosquito.id = "mosquitoId";

    // Removendo mosquito
    criarMosquito.onclick = function(){
        this.remove();
    }

    // Adicionando elemento no body
    document.body.appendChild(criarMosquito);

}

function ajusteTamanhoMosquito() {
    let ajustarTamanhoMosquito = Math.floor(Math.random() * 3);

    if(ajustarTamanhoMosquito === 0){
        return "resizeImg";
    }else if(ajustarTamanhoMosquito === 1){
        return "resizeImg--1";
    }else{
        return "resizeImg--2";
    }
}

function ladoRandom(){
    let ladoAleatorio = Math.floor(Math.random() * 2);
    switch(ladoAleatorio){
        case 0:
            return "ladoA";
        case 1:
            return "ladoB";
    }
}


function reiniciarJogo(){
    window.location.href = "index.html";
}

function starGame(){
    let nivel = document.getElementById("nivel").value;

    if(nivel === ""){
        alert(`Selecione um nivel para iniciar o jogo!!!`);
        return false;
    }

    window.location.href = "index.html?" + nivel;
}