// TIMING OUT

// setTimeout(function(){
//     document.write(`Apenas uma vez`);
// }, 1000);


// TIMING INTERVAL

let contador = 10;
let timer = setInterval(function(){
    document.write(`${contador}<br>`);
    contador--;

    if(contador <= -1){
        clearInterval(timer);
    }
}, 1000);