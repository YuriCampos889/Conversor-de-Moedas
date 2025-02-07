const API_KEY = 'klOk4IKS6CF00fT4lvrodlWlHHX71GnP';

export async function fetchAcoes() {
  try {
    const symbols = 'AMD,JNJ,AAPL,MSFT,GOOG,NVDA,AMZN,NFLX';
    const url = `https://financialmodelingprep.com/api/v3/quote/AMD,JNJ,AAPL,MSFT,GOOG,NVDA,AMZN,NFLX?apikey=klOk4IKS6CF00fT4lvrodlWlHHX71GnP`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data || data.length === 0) {
      throw new Error('Resposta inválida da API');
    }

    const resultados = {};
    for (const acao of data) {
      resultados[acao.symbol] = {
        name: acao.name || acao.symbol,
        price: acao.price,
        change: acao.change,
        percent_change: acao.changesPercentage
      };
    }

    return resultados;
  } catch (error) {
    console.error('Erro ao buscar cotações:', error);
    throw error;
  }
}
