import { color } from "chart.js/helpers";

export const containerStyle = {
  position: 'relative',
  textAlign: 'center',
  margin: '0',
};

export const imageStyle = {
  width: '100%',
  height: '447px',
  '@media (max-width: 768px)': {
    height: 'auto', // Ajusta a altura para telas menores
  },
};

export const converterBoxStyle = {
  position: 'absolute',
  marginLeft: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-437px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#000',
  padding: '40px',
  borderRadius: '4px',
  width: '870px',
  height: '310px',
  '@media (max-width: 768px)': {
    width: '90%', // Reduz a largura para telas menores
    height: 'auto', // Ajusta a altura automaticamente
    padding: '20px', // Reduz o padding
    marginLeft: '5%', // Centraliza horizontalmente
    marginTop: '-300px', // Ajusta a margem superior
  },
  '@media (max-width: 480px)': {
    width: '95%', // Aumenta a largura para telas muito pequenas
    padding: '10px', // Reduz ainda mais o padding
    marginTop: '-250px', // Ajusta a margem superior
  },
};

export const titleStyle = {
  color: 'white',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem', // Reduz o tamanho da fonte para telas menores
  },
  '@media (max-width: 480px)': {
    fontSize: '1.2rem', // Reduz ainda mais o tamanho da fonte
  },
};

export const inputContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    flexDirection: 'column', // Altera a direção para coluna em telas menores
    gap: '10px', // Adiciona espaçamento entre os elementos
  },
};

export const labelStyle = {
  marginBottom: '10px',
  fontSize: '1rem',
  color: 'white',
  '@media (max-width: 768px)': {
    fontSize: '0.9rem', // Reduz o tamanho da fonte
  },
};

export const selectStyle = {
  control: (base) => ({
    ...base,
    borderColor: '#020202',
    borderRadius: '30px',
    padding: '10px',
  }),
  option: (base) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
  }),
};

export const inputStyle = {
  padding: '14px',
  fontSize: '2rem',
  borderRadius: '30px',
  border: '1px solid #ddd',
  backgroundColor: '#ffffff',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem', // Reduz o tamanho da fonte
    padding: '10px', // Reduz o padding
  },
  '@media (max-width: 480px)': {
    fontSize: '1.2rem', // Reduz ainda mais o tamanho da fonte
    padding: '8px', // Reduz o padding
  },
};

export const convertedValueStyle = {
  padding: '14px',
  borderRadius: '30px',
  border: '1px solid #ddd',
  backgroundColor: '#f0f0f0',
  textAlign: 'center',
  color: 'black',
  fontSize: '2rem',
  fontWeight: 'bold',
  '@media (max-width: 768px)': {
    fontSize: '1rem', // Reduz o tamanho da fonte
    padding: '1px', // Reduz o padding
  },
  '@media (max-width: 480px)': {
    fontSize: '1.2rem', // Reduz ainda mais o tamanho da fonte
    padding: '8px', // Reduz o padding
  },
};

export const swapButtonStyle = {
  backgroundColor: '#ffffff',
  color: '#000000',
  border: 'none',
  borderRadius: '70px',
  padding: '10px 15px',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '0 10px',
  alignSelf: 'center',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#023086',
  },
  '@media (max-width: 768px)': {
    fontSize: '14px', // Reduz o tamanho da fonte
    padding: '8px 12px', // Reduz o padding
  },
  '@media (max-width: 480px)': {
    fontSize: '12px', // Reduz ainda mais o tamanho da fonte
    padding: '6px 10px', // Reduz o padding
  },
};

export const infoStyle = {
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  padding: '7px',
  borderRadius: '4px',
  marginTop: '95px',
  width: '870px',
  marginLeft: '-40px',
  height: '115px',
  '@media (max-width: 768px)': {
    width: '90%', // Reduz a largura
    marginLeft: '5%', // Centraliza horizontalmente
    marginTop: '50px', // Ajusta a margem superior
    height: 'auto', // Ajusta a altura automaticamente
  },
  '@media (max-width: 480px)': {
    width: '95%', // Aumenta a largura para telas muito pequenas
    marginTop: '30px', // Ajusta a margem superior
  },
};

export const noteStyle = {
  textAlign: 'justify',
  fontSize: '0.8rem',
  lineHeight: '1.8',
  '@media (max-width: 768px)': {
    fontSize: '0.7rem', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '0.6rem', // Reduz ainda mais o tamanho da fonte
  },
};

export const acoesContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'center',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  height: '40px',
  '@media (max-width: 768px)': {
    flexDirection: 'column', // Altera a direção para coluna
    height: 'auto', // Ajusta a altura automaticamente
  },
};

export const FirstKeyStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: '#020000',
  borderRadius: '8px',
  padding: '2px',
  marginTop: '-5px',
  color: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  minWidth: '150px',
  flex: '1 1 auto',
  '@media (max-width: 768px)': {
    minWidth: '120px', // Reduz a largura mínima
    padding: '8px', // Ajusta o padding
  },
  '@media (max-width: 480px)': {
    minWidth: '100px', // Reduz ainda mais a largura mínima
    padding: '6px', // Ajusta o padding
  },
};

export const SymbolStyle = {
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  '@media (max-width: 768px)': {
    fontSize: '12px', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '10px', // Reduz ainda mais o tamanho da fonte
  },
};

export const FirstValueStyle = {
  color: '#f3f0f0',
  fontWeight: 'bold',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  '@media (max-width: 768px)': {
    fontSize: '12px', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '10px', // Reduz ainda mais o tamanho da fonte
  },
};

export const TabelaStyle = {
  marginTop: '-220px',
  width: '50%',
  height: '187%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  marginLeft: '1305px',
  color: '#ffffff',
  fontWeight: 'bold',
  fontFamily: '"Montserrat", sans-serif',
  '@media (max-width: 768px)': {
    width: '90%', // Reduz a largura
    marginLeft: '5%', // Centraliza horizontalmente
    marginTop: '-150px', // Ajusta a margem superior
    height: 'auto', // Ajusta a altura automaticamente
  },
  '@media (max-width: 480px)': {
    width: '95%', // Aumenta a largura para telas muito pequenas
    marginTop: '-100px', // Ajusta a margem superior
  },
};

export const tabelaHeaderStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '10px',
  fontWeight: 'bold',
  textAlign: 'left',
};

export const tabelaRowStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export const tabelaCellStyle = {
  padding: '10px',
  textAlign: 'left',
  '@media (max-width: 768px)': {
    fontSize: '12px', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '10px', // Reduz ainda mais o tamanho da fonte
  },
};

export const howToUseStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '10px',
  fontWeight: 'bold',
  textAlign: 'left',
  position: 'absolute',
  marginLeft: '866px',
  marginTop: '-170px',
  width: '400px',
  height: '170px',
  borderRadius: '5px',
  '@media (max-width: 768px)': {
    width: '90%', // Reduz a largura
    marginLeft: '5%', // Centraliza horizontalmente
    marginTop: '-150px', // Ajusta a margem superior
    height: 'auto', // Ajusta a altura automaticamente
  },
  '@media (max-width: 480px)': {
    width: '95%', // Aumenta a largura para telas muito pequenas
    marginTop: '-100px', // Ajusta a margem superior
  },
};

export const htuTittleStyle = {
  fontSize: '18px',
  marginLeft: '5px',
  '@media (max-width: 768px)': {
    fontSize: '16px', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '14px', // Reduz ainda mais o tamanho da fonte
  },
};

export const htuInfoStyle = {
  color: '#ffffff',
  fontSize: '14px',
  position: 'absolute',
  marginTop: '-4px',
  '@media (max-width: 768px)': {
    fontSize: '12px', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '10px', // Reduz ainda mais o tamanho da fonte
  },
};

export const howItWorksStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  padding: '10px',
  fontWeight: 'bold',
  textAlign: 'left',
  position: 'absolute',
  marginLeft: '1300px',
  marginTop: '-25px',
  width: '400px',
  height: '255px',
  borderRadius: '10px',
  '@media (max-width: 768px)': {
    width: '90%', // Reduz a largura
    marginLeft: '5%', // Centraliza horizontalmente
    marginTop: '-20px', // Ajusta a margem superior
    height: 'auto', // Ajusta a altura automaticamente
  },
  '@media (max-width: 480px)': {
    width: '95%', // Aumenta a largura para telas muito pequenas
    marginTop: '-15px', // Ajusta a margem superior
  },
};

export const hiwTittleStyle = {
  fontSize: '18px',
  marginLeft: '5px',
  '@media (max-width: 768px)': {
    fontSize: '16px', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '14px', // Reduz ainda mais o tamanho da fonte
  },
};

export const hiwInfoStyle = {
  color: '#ffffff',
  position: 'absolute',
  marginTop: '-12px',
  '@media (max-width: 768px)': {
    fontSize: '12px', // Reduz o tamanho da fonte
  },
  '@media (max-width: 480px)': {
    fontSize: '10px', // Reduz ainda mais o tamanho da fonte
  },
};

export const usdStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '10px',
  fontWeight: 'bold',
  textAlign: 'left',
  position: 'absolute',
  marginLeft: '936px',
  marginTop: '-435px',
  width: '400px',
  height: '254px',
  borderRadius: '5px',
  zIndex: 10,
  '@media (max-width: 768px)': {
    width: '90%', // Reduz a largura
    marginLeft: '5%', // Centraliza horizontalmente
    marginTop: '-300px', // Ajusta a margem superior
    height: 'auto', // Ajusta a altura automaticamente
  },
  '@media (max-width: 480px)': {
    width: '95%', // Aumenta a largura para telas muito pequenas
    marginTop: '-250px', // Ajusta a margem superior
  },
};

export const currencyChartStyle = {
  position: 'relative',
  zIndex: 100,
  width: '100%',
  height: 'auto',
  marginLeft: '300px',
  backgroundColor: '#ffffff',
  '@media (max-width: 768px)': {
    marginLeft: '5%', // Centraliza horizontalmente
    width: '90%', // Reduz a largura
  },
  '@media (max-width: 480px)': {
    marginLeft: '2.5%', // Ajusta a margem esquerda
    width: '95%', // Aumenta a largura para telas muito pequenas
  },
};