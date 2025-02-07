const fetchBitcoinData = async () => {
  const url = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.Data.Data;
  } catch (error) {
    console.error('Erro ao buscar dados do Bitcoin:', error);
    throw error;
  }
};

const fetchEthereumData = async () => {
  const url = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=30';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.Data.Data;
  } catch (error) {
    console.error('Erro ao buscar dados do Ethereum:', error);
    throw error;
  }
};

const formatCryptoData = (cryptoData) => {
  return cryptoData.map((item) => ({
    date: new Date(item.time * 1000).toISOString().split('T')[0],
    value: item.close,
  }));
};

export { fetchBitcoinData, fetchEthereumData, formatCryptoData };
