import axios from 'axios';

async function getDollarQuote() {
  try {
    const response = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = response.data;
    const dollarQuote = data.USDBRL;

    console.log('Cotação do Dólar (USD-BRL):');
    console.log(`Compra: ${dollarQuote.bid}`);
    console.log(`Venda: ${dollarQuote.ask}`);
    console.log(`Atualizado em: ${dollarQuote.create_date}`);
  } catch (error) {
    console.error('Erro ao buscar cotação:', error.message);
  }
}

getDollarQuote();
