// Altura e Largura da pagina
// 1 - criar variaveis para guardar localização da altura e largura
// 2 - criar função para ajusta de acordo com a tela
// 3 - chamar função 
// 4 - adicionar no body atributo "onresize" para atualizar altura e largura

let altura = 0,
    largura = 0;

function ajusteAlturaLargura() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    // console.log(altura, largura);
}
ajusteAlturaLargura();


function posicaoRandomica() {

    // Caso exista o ID mosquitoId, remover o elemento criado anteriormente
    let verificaMosquito = document.getElementById("mosquitoId");
    if(verificaMosquito){
        document.getElementById("mosquitoId").remove()
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


function timer(){
    let tempoCriacao = setInterval(function(){
        posicaoRandomica();
    },1200)
}