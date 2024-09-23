import { useEffect, useState } from 'react';

const Exercise14 = () => {
  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [selectedUF, setSelectedUF] = useState('');
  const [filter, setFilter] = useState('');

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

  const filteredMunicipios = municipios.filter(municipio =>
    municipio.nome.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Exercise14</h1>
      <select onChange={(e) => fetchMunicipios(e.target.value)}>
        {ufs.map((uf) => <option key={uf.id} value={uf.id}>{uf.sigla}</option>)}
      </select>
      <input
        type="text"
        placeholder="Filtrar Municipios"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {selectedUF && (
        <div className="municipios-list">
          {filteredMunicipios.map((municipio) => (
            <div className="municipio-item" key={municipio.id}>
              {municipio.nome}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercise14;
