// PARAMETROS VARIAVEIS

function soma(){
    // console.log(arguments);
    let resultado = 0;
    for(let rFor in arguments){
        // console.log(arguments[rFor]);
        resultado += arguments[rFor];
    }

    return resultado;
}

console.log(soma(10,20,3.2,"Texto"));