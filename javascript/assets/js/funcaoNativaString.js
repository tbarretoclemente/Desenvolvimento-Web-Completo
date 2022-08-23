let nome = "Thiago Barreto Clemente";
let busca = "Thiago";
let splitExemplo = " ";

document.write(`<h1>Aula - Funções Nativas JavaScript - STRINGS</h1>`);
document.write(`<strong>Método Length:</strong> Usada para encontrar o comprimento de uma string`);
document.write(`<br>STRING: ${nome} // RETORNO DO MÉTODO: ${nome.length} <br><br>`);
document.write(`<strong>Método charAt:</strong> Retorna o caractere em um índice especificado.`);
document.write(`<br>STRING: ${nome} // RETORNO DO MÉTODO: ÍNDICE ${nome.indexOf('B')}, Letra ${nome.charAt(7)}.<br><br>`)
document.write(`<strong>Método IndexOf:</strong> Retorna o índice da primeira ocorrência de um valor em uma string.`);
document.write(`<br>STRING: ${nome} // RETORNO DO MÉTODO: ÍNDICE ${nome.indexOf('a')}, Letra ${nome.charAt(3)}.<br><br>`)
document.write(`<strong>Método includes :</strong> Retorna se uma string contém um valor especificado (TRUE/FALSE).`);
document.write(`<br>STRING: ${nome} // RETORNO DO MÉTODO: ${nome.includes(busca)}.<br><br>`);
document.write(`<strong>Método replace :</strong> Pesquisa uma string por um valor ou uma expressão regular e retorna uma string onde os valores são substituídos.`);
document.write(`<br>STRING: ${nome} // RETORNO DO MÉTODO: ${nome.replace('Thiago', 'Kaleu')}.<br><br>`);
document.write(`<strong>Método search :</strong> Pesquisa um valor ou expressão regular em uma string e retorna o índice (posição) da correspondência.`);
document.write(`<br>STRING: ${nome} // RETORNO DO MÉTODO: ÍNDICE ${nome.search('Clemente')}.<br><br>`);
document.write(`<strong>Método slice :</strong> Extrai uma parte de uma string e retorna uma nova string.`);
document.write(`<br>STRING: ${nome} // RETORNO DO MÉTODO: ${nome.slice(7)}.<br><br>`);


