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
data.setHours(data.getHosetHours() + 1);
document.write(`Horas: ${data.toString()} <br><br>`);


