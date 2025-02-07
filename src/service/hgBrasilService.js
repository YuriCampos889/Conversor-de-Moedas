// hgBrasilService.js
import axios from 'axios';

const API_KEY = '2b5c4529';

export const fetchIbovespaData = async () => {
  try {
    const response = await axios.get(
      `https://api.hgbrasil.com/finance/stock_price?key=${API_KEY}&symbol=^BVSP`
    );
    return response.data.results['^BVSP'];
  } catch (error) {
    console.error('Erro ao buscar dados da Ibovespa:', error);
    throw error;
  }
};