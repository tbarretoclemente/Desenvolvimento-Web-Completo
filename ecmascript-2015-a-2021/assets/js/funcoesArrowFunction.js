// Declaração Funçõoes Arrow Function


// Função Anonima
 let quadrado = function (x = 10){
    return x * x;
 }
 document.write(`Função Anonima: ${quadrado()} <br>`);


//  Arrow Function

let quadrado1 = x =>{
    return x * x;
}
document.write(`Função Arrow Function: ${quadrado1(20)} <br>`);

let soma = (x = 5,y = 5) => {
    return x + y
}

document.write(`Função Arrow Function: ${soma()} <br>`);



// Função Anonima
let parOuImpar = function(numero){
    if(numero % 2 == 0){
        return "par";
    }else{
        return "impar";
    }
}
document.write(`${parOuImpar(8)} <br>`);

// funcão arrow functionc

let parOuImpar2 = numero =>{
    if(numero % 2 == 0){
        return "par";
    }else{
        return "impar";
    }
}
document.write(`${parOuImpar2(3)}<br>`)

let parOuImpar3 = numero => (numero % 2 == 0) ? "par" : "impar";
document.write(`Usando Operador Ternário: ${parOuImpar3(3)}`);
