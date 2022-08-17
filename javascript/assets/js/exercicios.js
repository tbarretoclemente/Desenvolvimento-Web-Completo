// 1 = Hello World!

document.write(`Exercicio 1 - imprimir esta mensagem na tela: HELLO WORLD`);
document.write(`<h3>Hello World!!!</h3>`);


// 2 = Soma de duas variaveis
document.write(`Exercicio 2 - Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima a variavel X na tela.`);
let num1 = 10;
let num2 = 20;
document.write(`<br>A soma entra a var A ${num1} e var B ${num2} é: ${num1+num2}`);

// 3 = Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.
document.write(`<br><br>Exercicio 3 - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.`);
const raio = 3.14;
let area = (2**2) * raio;
document.write(`<br>A area do circulo é: ${area}`);

// 4 = Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores.
document.write(`<br><br>Exercicio 4 - Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores.`);
document.write(`<br>O produto entre ${num1} e ${num2 } é: ${num1 * num2}`);

// 5 = Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno.
let nota1 = 5.25;
let nota2 = 6.35;
document.write(`<br><br>Exercicio 5 - Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno.`);
document.write(`<br>Nota 1: ${nota1} <br> Nota 2: ${nota2} <br> A média final do aluno é: ${(nota1+nota2)/2}`);

// 6 = Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D
document.write(`<br><br>Exercicio 6 - Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D.`);
let valorA = 5;
let valorB = 6;
let valorC = 7;
let valorD = 8;
document.write(`<br>A: ${valorA} <br> B: ${valorB} <br> C: ${valorC} <br> D: ${valorD} <br>`)
document.write(`A diferença entre os valores é: ${(valorA * valorB) - (valorC * valorD)}`);

// 7 = leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário
document.write(`<br><br>Exercico 7 - leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário.`);
let idFuncionario = 13;
let horasTrabalhadasMes = 192; //mês
let valorHoraTrabalhada = 10;
document.write(`<br>Id do funcionário: ${idFuncionario}<br>Horas Trabalhadas/Mês: ${horasTrabalhadasMes} horas.<br>Valor hora trabalhada: R$${valorHoraTrabalhada} reais`);
document.write(`<br>Salário a receber é: R$${horasTrabalhadasMes * valorHoraTrabalhada} reais`);

// 8 = leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês
// sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês
document.write(`<br><br>Exercico 8 - leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês. Adicione uma comissão de 15% sobre suas vendas, e some com o salário.`);
let nomeVendedor = "Thiago Barreto Clemente";
let salarioFixo = 1045.27;
let vendasMes = 1230.32;
document.write(`<br>Nome do funcionário: ${nomeVendedor}<br>Salário Fixo: R$${salarioFixo}<br>Valor de Vendas/Mês: R$${vendasMes} reais`);
document.write(`<br>Salário a receber com comissão é: R$${(vendasMes*0.15) + salarioFixo} reais`)













































