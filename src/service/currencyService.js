import axios from 'axios';

export const fetchMoedas = async () => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    return Object.keys(response.data.rates);
  } catch (error) {
    console.error('Erro ao buscar moedas:', error);
    throw error;
  }
};

export const fetchTaxa = async (moedaOrigem, moedaDestino) => {
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`);
    return response.data.rates[moedaDestino];
  } catch (error) {
    console.error('Erro ao buscar taxa de câmbio:', error);
    throw error;
  }
};