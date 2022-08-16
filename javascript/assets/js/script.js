// alert("Olá mundo!!");

// Declaração de variaveis

// var nome = "Thiago Barreto Clemente";
// let rg = 337861892;
// const cpf = true;
// console.log(nome,rg, cpf);


// IF/ELSE
// var verdaeiro = false;

// if(23 !== 22){
//     document.write("Esse é um if verdadeiro");
// }else{
//     document.write("Esse é um if falso");
// }


// OPERADOR TERNÁRIO
// var age = 12;
// var resultado = (age > 18) ? true : false;
// document.write(resultado);

// SWITCH

// var condicacao = 1;

// switch(condicacao){
//     case 1:
//         if(condicacao == 1){
//             document.write("Estamos no case 1");
//         }
//         break;
//     case 2:
//         if(condicacao == 2){
//             document.write("Estamos no case 2");
//         }
//         break;

//     default :
//         document.write("Opção Default");
//         break;
// }


// var condicacao2 = "sair";
// switch (condicacao2) {
//     case "start":
//         document.write("O jogo vai começar");
//         break;
//     case "pausa":
//         document.write("O jogo está em pausa");
//         break;
//     case "sair":
//         document.write("O jogo foi fechado");
//         break;

//     default:
//         alert("Default");
//         break;
// }


// Operadores Aritmeticos

// var numero1 = 10;
// var numero2 = 10;

// document.write(`A soma entre ${numero1} e ${numero2} = ${numero1 + numero2} <br>`);
// document.write(`A subtração entre ${numero1} e ${numero2} = ${numero1 - numero2} <br>`);
// document.write(`A multiplicação entre ${numero1} e ${numero2} = ${numero1 * numero2} <br>`);
// document.write(`A divisão entre ${numero1} e ${numero2} = ${numero1 / numero2} <br>`);
// document.write(`O resto da divisão entre ${numero1} e ${numero2} = ${numero1 % numero2} <br>`);
// document.write(`A exponenciação/ou potenciação  entre ${numero1} e ${numero2} = ${numero1 ** numero2} <br>`);
// document.write(`O incremento de ${numero1++} é `);
// document.write(` ${numero1}<br>`);
// document.write(`O decremento de ${numero2--} é `);
// document.write(` ${numero2}<br>`);


// LOOPS 

// WHILE
// let contador = 0;
// let contador1 = 10;

// document.write("<h3>Usando Loop WHILE para criar contador</h3>");


// while(contador < 11){
//     document.write(`Contador de Incremento ${contador} <br>`);
//     contador++;
// }

// document.write("<hr>")
// while(contador1 > -1){
//     document.write(`Contador de Decremento ${contador1} <br>`);
//     contador1--;
// }
// document.write("<hr>")
// document.write("<h3>Usando Loop FOR para criar contador</h3>");

// FOR

// for(contadorFor = 0; contadorFor < 11; contadorFor++){
//     document.write(`Contador de Incremento ${contadorFor} <br>`); 
// }

// document.write("<hr>")
// for(contadorFor1 = 10; contadorFor1 > -1; contadorFor1--){
//     document.write(`Contador de Decremento ${contadorFor1} <br>`);
// }


// FUNÇÕES
// let nomeUsuario = "Thiago Barreto Clemente";
// let num1 = Number(prompt("Digite um número: "));
// let num2 = Number(prompt("Digite um número: "));

// function helloWorld(){
//     alert("Hello World!!!")
// }

// function texto(){
//     let texto = "Essa é uma função usando variavel local de retorno!!!";
//     alert(texto);
// }

// function boasVindas(){
//     let texto = `Olá ${nomeUsuario} seja bem vindo ao javascript`;
//     alert(texto)
// }

// function parametros(text, nome){
//     alert(text + nome);
// }

// function retorno(numero1, numero2){
//     let soma = numero1 + numero2;
//     return soma;
// }
// resultadoSoma = retorno(num1,num2)
// document.write(`A soma entre os números é: ${num1} e ${num2} = ${resultadoSoma}`);

// parametros("Olá ", nomeUsuario);
// boasVindas();
// helloWorld();
// texto();