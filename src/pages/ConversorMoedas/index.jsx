import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ChartComponent from '../../components/Chart';
import Section from '../../components/Section';
import BackgroundImage from '../../assets/images/mundi5.jpg';
import Select from 'react-select';
import ReactCountryFlag from "react-country-flag";
import { fetchMoedas, fetchTaxa } from '../../service/currencyService';
import { fetchBitcoinData, fetchEthereumData, formatCryptoData } from '../../service/cryptoService';
import { fetchAcoes } from '../../service/actionsService';
import CurrencyChart from "../../components/CurrencyChart";
import axios from 'axios';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import "@fontsource/poppins";
import { useTranslation } from "react-i18next";
import { 
  containerStyle, 
  imageStyle, 
  converterBoxStyle, 
  titleStyle, 
  inputContainerStyle, 
  labelStyle, 
  selectStyle, 
  inputStyle, 
  convertedValueStyle,
  swapButtonStyle,
  infoStyle,
  noteStyle,
  FirstKeyStyle,
  FirstValueStyle,
  SymbolStyle,
  acoesContainerStyle,
  TabelaStyle,
  tabelaCellStyle,
  tabelaHeaderStyle,
  tabelaRowStyle,
  howToUseStyle,
  htuTittleStyle,
  htuInfoStyle,
  howItWorksStyle,
  usdStyle,
  currencyChartStyle,
} from './styles';

const ConversorMoedas = () => {
  const [data, setData] = useState([]);
  const [moedas, setMoedas] = useState([]);
  const [moedaOrigem, setMoedaOrigem] = useState('BRL');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [valorOrigem, setValorOrigem] = useState(1);
  const [valorConvertido, setValorConvertido] = useState(0);
  const [taxa, setTaxa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [acoes, setAcoes] = useState({});
  const [taxas, setTaxas] = useState({});
  const [currencyData, setCurrencyData] = useState([]);
  const moedasDesejadas = ['USD', 'EUR', 'GBP', 'CAD', 'ARS', 'JPY', 'CHF', 'CNY'];
  const [btcData, setBtcData] = useState([]);
  const [ethData, setEthData] = useState([]);

  const stockLogos = {
    AMD: 'https://logo.clearbit.com/amd.com',
    JNJ: 'https://logo.clearbit.com/jnj.com',
    AAPL: 'https://logo.clearbit.com/apple.com',
    MSFT: 'https://logo.clearbit.com/microsoft.com',
    GOOG: 'https://logo.clearbit.com/google.com',
    NVDA: 'https://logo.clearbit.com/nvidia.com',
    AMZN: 'https://logo.clearbit.com/amazon.com',
    NFLX: 'https://logo.clearbit.com/netflix.com'
  };
  
  const getSymbol = (currencyCode) => {
    const moedaNomes = {
      USD: 'US dollar',
      EUR: 'Euro',
      BRL: 'Real',
      AED: "United Arab Emirates Dirham",
      AFN: "Afghan Afghani",
      ALL: "Albanian Lek",
      AMD: "Armenian Dram",
      ANG: "Netherlands Antillean Guilder",
      AOA: "Angolan Kwanza",
      ARS: "Argentine Peso",
      AUD: "Australian Dollar",
      AWG: "Aruban Florin",
      AZN: "Azerbaijani Manat",
      BAM: "Bosnia-Herzegovina Convertible Mark",
      BBD: "Barbadian Dollar",
      BDT: "Bangladeshi Taka",
      BGN: "Bulgarian Lev",
      BHD: "Bahraini Dinar",
      BIF: "Burundian Franc",
      BMD: "Bermudian Dollar",
      BND: "Brunei Dollar",
      BOB: "Bolivian Boliviano",
      BRL: "Brazilian Real",
      BSD: "Bahamian Dollar",
      BTC: "Bitcoin",
      BTN: "Bhutanese Ngultrum",
      BWP: "Botswanan Pula",
      BYN: "Belarusian Ruble",
      BYR: "Belarusian Ruble (pre-2016)",
      BZD: "Belize Dollar",
      CAD: "Canadian Dollar",
      CDF: "Congolese Franc",
      CHF: "Swiss Franc",
      CLF: "Chilean Unit of Account (UF)",
      CLP: "Chilean Peso",
      CNY: "Chinese Yuan",
      COP: "Colombian Peso",
      CRC: "Costa Rican Colón",
      CUC: "Cuban Convertible Peso",
      CUP: "Cuban Peso",
      CVE: "Cape Verdean Escudo",
      CZK: "Czech Republic Koruna",
      DJF: "Djiboutian Franc",
      DKK: "Danish Krone",
      DOP: "Dominican Peso",
      DZD: "Algerian Dinar",
      EGP: "Egyptian Pound",
      ERN: "Eritrean Nakfa",
      ETB: "Ethiopian Birr",
      EUR: "Euro",
      FJD: "Fijian Dollar",
      FKP: "Falkland Islands Pound",
      FOK: "Faroese Króna",
      GBP: "British Pound Sterling",
      GEL: "Georgian Lari",
      GGP: "Guernsey Pound",
      GHS: "Ghanaian Cedi",
      GIP: "Gibraltar Pound",
      GMD: "Gambian Dalasi",
      GNF: "Guinean Franc",
      GTQ: "Guatemalan Quetzal",
      GYD: "Guyanaese Dollar",
      HKD: "Hong Kong Dollar",
      HNL: "Honduran Lempira",
      HRK: "Croatian Kuna",
      HTG: "Haitian Gourde",
      HUF: "Hungarian Forint",
      IDR: "Indonesian Rupiah",
      ILS: "Israeli New Sheqel",
      IMP: "Isle of Man Pound",
      INR: "Indian Rupee",
      IQD: "Iraqi Dinar",
      IRR: "Iranian Rial",
      ISK: "Icelandic Króna",
      JEP: "Jersey Pound",
      JMD: "Jamaican Dollar",
      JOD: "Jordanian Dinar",
      JPY: "Japanese Yen",
      KES: "Kenyan Shilling",
      KGS: "Kyrgystani Som",
      KHR: "Cambodian Riel",
      KID: "Kiribati Dollar",
      KMF: "Comorian Franc",
      KRW: "South Korean Won",
      KWD: "Kuwaiti Dinar",
      KYD: "Cayman Islands Dollar",
      KZT: "Kazakhstani Tenge",
      LAK: "Laotian Kip",
      LBP: "Lebanese Pound",
      LKR: "Sri Lankan Rupee",
      LRD: "Liberian Dollar",
      LSL: "Lesotho Loti",
      LYD: "Libyan Dinar",
      MAD: "Moroccan Dirham",
      MDL: "Moldovan Leu",
      MGA: "Malagasy Ariary",
      MKD: "Macedonian Denar",
      MMK: "Myanma Kyat",
      MNT: "Mongolian Tugrik",
      MOP: "Macanese Pataca",
      MRU: "Mauritanian Ouguiya",
      MUR: "Mauritian Rupee",
      MVR: "Maldivian Rufiyaa",
      MWK: "Malawian Kwacha",
      MXN: "Mexican Peso",
      MYR: "Malaysian Ringgit",
      MZN: "Mozambican Metical",
      NAD: "Namibian Dollar",
      NGN: "Nigerian Naira",
      NIO: "Nicaraguan Córdoba",
      NOK: "Norwegian Krone",
      NPR: "Nepalese Rupee",
      NZD: "New Zealand Dollar",
      OMR: "Omani Rial",
      PAB: "Panamanian Balboa",
      PEN: "Peruvian Nuevo Sol",
      PGK: "Papua New Guinean Kina",
      PHP: "Philippine Peso",
      PKR: "Pakistani Rupee",
      PLN: "Polish Zloty",
      PYG: "Paraguayan Guarani",
      QAR: "Qatari",
      RON: "Novo Leu Romeno",
      RSD: "Dinar Sérvio",
      RUB: "Rublo Russo",
      RWF: "Franco Ruandês",
      SAR: "Rial Saudita",
      SBD: "Dólar das Ilhas Salomão",
      SCR: "Rupia das Seychelles",
      SDG: "Libra sudanesa",
      SEK: "Coroa sueca",
      SGD: "Dólar de Singapura",
      SHP: "Libra de Sta. Helena",
      SLE: "Leone da Serra Leoa",
      SLL: "Leone da Serra Leoa",
      SOS: "Xelim da Somália",
      SRD: "Dólar do Suriname",
      SSP: "Libra sul-sudanesa",
      STN: "Dobra de São Tomé e Príncipe",
      SYP: "Libra Síria",
      SZL: "Lilangeni da Suazilândia",
      THB: "Baht tailandês",
      TJS: "Somoni do Tajiquistão",
      TMT: "Novo manat do Turquemenistão",
      TND: "Dinar tunisino",
      TOP: "Pa'anga tonganesa",
      TRY: "Lira turca",
      TTD: "Dólar de Trindade/Tobago",
      TVD: "Dólar Tuvaluano",
      TWD: "Dólar de Taiwan",
      TZS: "Xelim tanzaniano",
      UAH: "Hryvnia da Ucrânia",
      UZS: "Som uzbeque",
      UYU: "Peso uruguaio",
      VES: "Bolívar soberano venezuelano",
      VND: "Dong vietnamita",
      VUV: "Vatu de Vanuatu",
      WST: "Tala samoano",
      XAF: "Franco CFA BEAC",
      XCD: "East Caribbean Dollar",
      XDR: "Direitos de Saque Especiais",
      XOF: "Franco CFA da África Ocidental",
      XPF: "Bolsa de Franco Pacífico",
      YER: "Rial do Iémen",
      ZAR: "Rand sul-africano",
      ZMW: "Kwacha Zambiense",
      ZWL: "Dólar do Zimbábue"
    };
    return moedaNomes[currencyCode] || currencyCode;
  };

  useEffect(() => {
    const loadMoedas = async () => {
      try {
        const moedaData = await fetchMoedas();
        setMoedas(moedaData);
      } catch (error) {
        console.error('Erro ao carregar moedas:', error);
      }
    };
    loadMoedas();
  }, []);

  useEffect(() => {
    const loadTaxa = async () => {
      if (moedaOrigem && moedaDestino) {
        try {
          const responseOrigem = await fetchTaxa('USD', moedaOrigem);
          const taxaOrigem = responseOrigem;
          const responseDestino = await fetchTaxa('USD', moedaDestino);
          const taxaDestino = responseDestino;
          const taxaAtual = taxaDestino / taxaOrigem;
          setTaxa(taxaAtual);
        } catch (error) {
          console.error('Erro ao carregar taxa de câmbio:', error);
        }
      }
    };
    loadTaxa();
  }, [moedaOrigem, moedaDestino]);

  useEffect(() => {
    if (taxa) {
      setValorConvertido((valorOrigem * taxa).toFixed(2));
    }
  }, [valorOrigem, taxa]);

  const trocarMoedas = () => {
    const temp = moedaOrigem;
    setMoedaOrigem(moedaDestino);
    setMoedaDestino(temp);
  };

  const formatOptions = (moedas) => {
    return moedas.map((moeda) => ({
      value: moeda,
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ReactCountryFlag
            countryCode={moeda.substring(0, 2)}
            svg
            style={{ width: '30px', height: '20px', marginRight: '8px' }}
          />
          {getSymbol(moeda)} {moeda}
        </div>
      ),
    }));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const bitcoinData = await fetchBitcoinData();
        const ethereumData = await fetchEthereumData();
        setBtcData(formatCryptoData(bitcoinData));
        setEthData(formatCryptoData(ethereumData));
      } catch (error) {
        console.error('Erro ao carregar dados das criptomoedas:', error);
      }
    };
    
    getData();
  }, []);

  useEffect(() => {
    fetchAcoes()
      .then(setAcoes)
      .catch(error => console.error('Erro ao carregar dados das ações:', error));
  }, []);

  useEffect(() => {
    const loadTaxas = async () => {
      const taxasData = {};
      for (const moeda of moedasDesejadas) {
        try {
          const taxa = await fetchTaxa('BRL', moeda);
          taxasData[moeda] = (1 / taxa).toFixed(2);
        } catch (error) {
          console.error(`Erro ao carregar taxa para ${moeda}:`, error);
        }
      }
      setTaxas(taxasData);
    };

    loadTaxas();
  }, []);

  const fetchCurrencyHistory = async () => {
    try {
      const response = await axios.get(
        "https://economia.awesomeapi.com.br/json/daily/USD-BRL/15"
      );
      const formattedData = response.data.map((item) => ({
        date: new Date(item.timestamp * 1000).toLocaleDateString(),
        value: parseFloat(item.bid),
      }));
      setCurrencyData(formattedData);
    } catch (error) {
      console.error("Erro ao buscar histórico de cotações:", error);
    }
  };

  useEffect(() => {
    fetchCurrencyHistory();
  }, []);
  
  const { t } = useTranslation();


  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <ChartComponent btcData={btcData} ethData={ethData} />
      </div>
      <div style={{ marginTop: '22px', width: '100%' }}>
        {Object.keys(acoes).length === 0 ? (
          <p>{t('loadingActions')}</p> 
        ) : (
          <div style={acoesContainerStyle}>
            {Object.entries(acoes).map(([symbol, data]) => {
              const isUp = data.variation >= 0;
              return (
                <div key={symbol} style={FirstKeyStyle}>
                  <img
                    src={stockLogos[symbol] || 'https://via.placeholder.com/20'}
                    alt={symbol}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                  <span style={SymbolStyle}>{symbol.toUpperCase()}</span>
                  <span style={FirstValueStyle}>R$ {data.price}</span>
                  {isUp ? (
                    <FaArrowUp style={{ color: 'green', marginLeft: '5px' }} />
                  ) : (
                    <FaArrowDown style={{ color: 'red', marginLeft: '5px' }} />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Section />
  
      <div style={containerStyle}>
        <img src={BackgroundImage} alt="Mapa Mundi" style={imageStyle} />
        <div style={converterBoxStyle}>
  <h3 style={titleStyle}> </h3>
  <div style={inputContainerStyle}>
    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', '@media (max-width: 768px)': { width: '100%' } }}>
      <label htmlFor="moedaOrigem" style={labelStyle}>{t('from')}</label>
      <div style={{ marginBottom: '10px' }}>
        <Select
          id="moedaOrigem"
          options={formatOptions(moedas)}
          value={{
            value: moedaOrigem,
            label: (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ReactCountryFlag
                  countryCode={moedaOrigem.substring(0, 2)}
                  svg
                  style={{ width: '55px', height: '35px', marginRight: '8px' }}
                />
                {getSymbol(moedaOrigem)} {moedaOrigem}
              </div>
            ),
          }}
          onChange={(e) => setMoedaOrigem(e.value)}
          styles={selectStyle}
        />
      </div>
      <input
        type="number"
        value={valorOrigem}
        onChange={(e) => setValorOrigem(e.target.value)}
        style={inputStyle}
      />
    </div>
    <button onClick={trocarMoedas} style={{ ...swapButtonStyle, '@media (max-width: 768px)': { alignSelf: 'center' } }}>
      ↔
    </button>
    <div style={{ display: 'flex', flexDirection: 'column', width: '45%', '@media (max-width: 768px)': { width: '100%' } }}>
      <label htmlFor="moedaDestino" style={labelStyle}>{t('to')}</label>
      <div style={{ marginBottom: '10px' }}>
        <Select
          id="moedaDestino"
          options={formatOptions(moedas)}
          value={{
            value: moedaDestino,
            label: (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ReactCountryFlag
                  countryCode={moedaDestino.substring(0, 2)}
                  svg
                  style={{ width: '55px', height: '35px', marginRight: '8px' }}
                />
                {getSymbol(moedaDestino)} {moedaDestino}
              </div>
            ),
          }}
          onChange={(e) => setMoedaDestino(e.value)}
          styles={selectStyle}
        />
      </div>
      <input
        type="text"
        value={valorConvertido}
        readOnly
        style={convertedValueStyle}
      />
    </div>
  </div>
  <div style={infoStyle}>
    <p style={noteStyle}>
      • {t('conversionNote1')} <br />
      • {t('conversionNote2')} <br />
      • {t('conversionNote3')} <br />
    </p>
  </div>
  <div style={TabelaStyle}>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={tabelaHeaderStyle}>
          <th style={tabelaCellStyle}>{t('currency')}</th>
          <th style={tabelaCellStyle}>{t('valueBRL')}</th>
        </tr>
      </thead>
      <tbody>
        {moedasDesejadas.map((moeda) => {
          const valorEmBRL = taxas[moeda] || 'Carregando...';
          return (
            <tr key={moeda} style={tabelaRowStyle}>
              <td style={tabelaCellStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ReactCountryFlag
                    countryCode={moeda.substring(0, 2)}
                    svg
                    style={{ width: '20px', height: '15px', marginRight: '8px' }}
                  />
                  {getSymbol(moeda)} ({moeda})
                </div>
              </td>
              <td style={tabelaCellStyle}>R$ {valorEmBRL}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  <div style={howToUseStyle}>
    <h2 style={htuTittleStyle}>{t('howToUseTitle')}</h2>
    <p style={htuInfoStyle}>
      {t('step1')} <br />
      {t('step2')} <br />
      {t('step3')} <br />
      {t('step4')}
    </p>
  </div>
</div>
<div style={usdStyle}>
  USD-BRL
  <CurrencyChart 
    data={currencyData} 
    style={currencyChartStyle} 
  />
</div>
      </div>
      <Section />
    </div>
  );
  
};
export default ConversorMoedas;