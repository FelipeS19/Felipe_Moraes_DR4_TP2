import { useEffect, useState } from 'react';

const Exercise13 = () => {
  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [selectedUF, setSelectedUF] = useState('');

  useEffect(() => {
    const fetchUfs = async () => {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      const data = await response.json();
      setUfs(data);
    };
    fetchUfs();
  }, []);

  const fetchMunicipios = async (uf) => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    const data = await response.json();
    setMunicipios(data);
    setSelectedUF(uf);
  };

  return (
    <div>
      <h1>Exercise 13</h1>
      <select onChange={(e) => fetchMunicipios(e.target.value)}>
        {ufs.map((uf) => <option key={uf.id} value={uf.id}>{uf.sigla}</option>)}
      </select>
      {selectedUF && (
        <div className="municipios-list">
          {municipios.map((municipio) => (
            <div className="municipio-item" key={municipio.id}>
              {municipio.nome}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercise13;
