let numero = 7.24444;
let numero2 = 8.24444;
let numero3 = 2;
let numero4 = 12;
document.write(`<h1>Aula - Funções Nativas JavaScript - Matemáticas</h1>`);
document.write(`<strong>Método Math.ceil:</strong> Retorna número, arredondado para cima para o inteiro mais próximo.<br><br>`);
document.write(`Número: ${numero} // Número Arredondado: ${Math.ceil(numero)} <br><br>`);
document.write(`<strong>Método Math.floor:</strong> Retorna número, arredondado para baixo para o inteiro mais próximo.<br><br>`);
document.write(`Número: ${numero} // Número Arredondado: ${Math.floor(numero)} <br><br>`);
document.write(`<strong>Método Math.round:</strong> Arredonda número para o inteiro mais próximo.<br><br>`);
document.write(`Número: ${numero} // Número Arredondado: ${Math.round(numero)} <br><br>`);
document.write(`<strong>Método Math.max:</strong> Retorna o número com o maior valor.<br><br>`);
document.write(`Número: ${numero} e Número ${numero2} // Maior Número é: ${Math.max(numero,numero2)}<br><br>`);
document.write(`<strong>Método Math.min:</strong> Retorna o número com o menor valor.<br><br>`);
document.write(`Número: ${numero} e Número ${numero2} // Menor Número é: ${Math.min(numero,numero2)}<br><br>`);
document.write(`<strong>Método Math.pow:</strong> Retorna o valor de x elevado a y.<br><br>`);
document.write(`Número: ${numero3} e Número ${numero4} // Valor elevado: ${Math.pow(numero3,numero4)}<br><br>`);
document.write(`<strong>Método Math.random:</strong> Retorna um número aleatório.<br><br>`);
document.write(`Número aletório: ${Math.floor(Math.random() * 100 + 1) }<br><br>`);
document.write(`<strong>Método Math.sign:</strong> Retorna o sinal de um número (verifica se é positivo, negativo ou zero).<br><br>`);
document.write(`Número ${numero} // Igual a 1 = Positivo / Igual a -1 = Negativo / Igual a ZERO é ZERO: ${Math.sign(numero)} <br><br>`);
document.write(`<strong>Método Math.sqrt:</strong> Retorna a raiz quadrada de número.<br><br>`);
document.write(`Número ${numero4} // Raiza Quadrada: ${Math.sqrt(numero4)} <br><br>`);
document.write(`<strong>Método Math.trunc:</strong> Retorna a parte inteira de um número, removendo os décimais.<br><br>`);
document.write(`Número ${numero2} // Retorno: ${Math.trunc(numero2)} <br><br>`);

document.write(`<h3>Funções Nativas Númericas</h3>`);
document.write(`<strong>Método Number.isInteger:</strong> Verifica se um valor é um inteiro.<br><br>`);
document.write(`Número ${numero2} // Retorno: ${Number.isInteger(numero2)} <br><br>`);
document.write(`Número ${numero3} // Retorno: ${Number.isInteger(numero3)} <br><br>`);
document.write(`<strong>Método toFixed:</strong> Formata um número com x números de dígitos após o ponto decimal.<br><br>`);
document.write(`Número ${numero} // Retorno: ${numero.toFixed(2)} <br><br>`);

