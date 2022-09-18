// DESAFIO 1

// var a = 10;
// var b = 20;
// var c = null;
// document.write("A: "+ a + "\nB: "+ b + " <br>");
// console.log(a,b,c);
// c = a;
// a = b;
// b = c;
// document.write("A: "+ a + "\nB: "+ b);
// console.log(a,b,c);


// DESAFIO 2 = MEDIA ALUNO

// var nota1 = 9.99;
// var nota2 = 9.99;
// var nota3 = 9.99;
var nota1 = Number(prompt("Informe a primeira nota: "));
var nota2 = Number(prompt("Informe a segunda nota: "));
var nota3 = Number(prompt("Informe a terceira nota: "));

// nota1 = parseFloat(nota1);
// nota2 = parseFloat(nota2);
// nota3 = parseFloat(nota3);

var media = (nota1 + nota2 + nota3) / 3;
if(media <= 4.99){
    document.write("Aluno Reprovado !!!");
}else if(media >= 5 && media <= 6.99){
    document.write("Aluno Está de recuperação !!!");
}else{
    document.write("Aluno Aprovado !!!");
}
document.write("<br>Nota Final: " + media)
console.log(media);
