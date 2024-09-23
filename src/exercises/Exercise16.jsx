import { useState } from 'react';

const Exercise16 = () => {
  const [year, setYear] = useState('');
  const [names, setNames] = useState([]);
  const [error, setError] = useState('');

  const fetchNames = async (decade) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${decade}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados');
      }
      const data = await response.json();
      console.log(data); // Verifique a estrutura dos dados
      setNames(data[0]?.res || []); // Acessando o array res
      setError('');
    } catch (err) {
      setError(err.message);
      setNames([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (year.endsWith('0') && year.length === 4) {
      fetchNames(year);
    } else {
      alert('Digite um ano válido terminado em zero.');
    }
  };

  return (
    <div>
      <h1>Exercise 16</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Digite um ano (ex: 1980)"
        />
        <button type="submit">Buscar Nomes</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {names.map((item) => (
          <li key={item.ranking}>{item.nome}: {item.frequencia}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise16;
