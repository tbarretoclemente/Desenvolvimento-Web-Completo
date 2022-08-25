let data = new Date();


document.write(`<h1>Aula - Funções Nativas JavaScript - Datas</h1>`);
document.write(`<strong>Método getDate:</strong> Retorna o dia do mês (de 1 a 31).<br><br>`);
document.write(`Dia: ${data.getDate()} <br><br>`);
document.write(`<strong>Método getDay:</strong> Retorna o dia da semana (de 0 a 6).<br><br>`);
document.write(`Dia da Semana: ${data.getDay()+1} <br><br>`);
document.write(`<strong>Método getMonth:</strong> Retorna o mês (de 0 a 11).<br><br>`);
document.write(`Mês: ${data.getMonth()+1} <br><br>`);
document.write(`<strong>Método getFullYear:</strong> Retorna o ano.<br><br>`);
document.write(`Ano: ${data.getFullYear()} <br><br>`);
document.write(`<strong>Método getHours:</strong> Retorna a hora (de 0-23).<br><br>`);
document.write(`Hora: ${data.getHours()}<br><br>`);
document.write(`<strong>Método getMinutes:</strong> Retorna os minutos (de 0-59).<br><br>`);
document.write(`Minutos: ${data.getMinutes()}<br><br>`);
document.write(`<strong>Método getMilliseconds:</strong> Retorna os milissegundos (de 0-999).<br><br>`);
document.write(`Milissegundos: ${data.getMilliseconds()}<br><br>`);

document.write(`<hr><br>`);
document.write(`<strong>Método setDate:</strong> Define o dia do mês de um objeto de data.<br><br>`);
document.write(`Dia do mês: ${data.toString()} <br><br>`);
data.setDate(data.getDate() + 1)
document.write(`Dia do mês: ${data.toString()} <br><br>`);

document.write(`<strong>Método setMonth:</strong> Define o mês de um objeto de data.<br><br>`);
document.write(`Mês: ${data.toString()} <br><br>`);
data.setMonth(data.getMonth() + 1);
document.write(`Mês: ${data.toString()} <br><br>`);

document.write(`<strong>Método setFullYear:</strong> Define o ano de um objeto de data.<br><br>`);
document.write(`Ano: ${data.toString()} <br><br>`);
data.setFullYear(data.getFullYear() + 1);
document.write(`Ano: ${data.toString()} <br><br>`);


document.write(`<strong>Método setHours:</strong> Define a hora de um objeto de data.<br><br>`);
document.write(`Horas: ${data.toString()} <br><br>`);
data.setHours(data.getHours() + 2);
document.write(`Horas: ${data.toString()} <br><br>`);

document.write(`<strong>Método setMinutes:</strong> Definir os minutos de um objeto de data.<br><br>`);
document.write(`Minutos: ${data.toString()} <br><br>`);
data.setMinutes(data.getMinutes() + 42);
document.write(`Minutos: ${data.toString()} <br><br>`);

document.write(`<strong>Método setMilliseconds:</strong> Define os milissegundos de um objeto de data.<br><br>`);
document.write(`Milissegundos: ${data.toString()} <br><br>`);
data.setMilliseconds(data.getMilliseconds() + 50);
document.write(`Milissegundos: ${data.toString()} <br><br><hr>`);


document.write(`<strong>Método toJSON():</strong> Retorna a data como uma string, formatada como uma data JSON.<br><br>`);
document.write(`JSON Data: ${data.toJSON()} <br><br>`);
document.write(`<strong>Método toLocaleDateString():</strong> Retorna a parte de data de um objeto Date como uma string, usando convenções de localidade.<br><br>`);
document.write(`Data: ${data.toLocaleDateString()} <br><br>`);
document.write(`<strong>Método toLocaleTimeString():</strong> Retorna a parte de hora de um objeto Date como uma string, usando convenções de localidade.<br><br>`);
document.write(`Hora: ${data.toLocaleTimeString()}<br><br>`);
document.write(`<strong>Método toLocaleString():</strong> Converte um objeto Date em uma string, usando convenções de localidade.<br><br>`);
document.write(`Data/Hora: ${data.toLocaleString()}`);


