const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '2px solid #020000',
    borderRadius: '10px',
    backgroundColor: '#101218',
    width: '99%',
    margin: '0 auto',
    height: '220px',
    gap: '50px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      height: 'auto',
      padding: '10px',
      gap: '20px',
    },
    '@media (max-width: 480px)': {
      padding: '5px',
      gap: '10px',
    },
  },
  chartContainer: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    '@media (max-width: 768px)': {
      width: '100%',
      marginBottom: '10px',
    },
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#f7eeee',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
      marginBottom: '10px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
  chart: {
    width: '100%',
    height: '100%',
    '@media (max-width: 768px)': {
      height: '150px',
    },
    '@media (max-width: 480px)': {
      height: '120px',
    },
  },
};

export default styles;