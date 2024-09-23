import { useEffect, useState } from 'react';

const Exercise12 = () => {
  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');

  // Carregar UFs somente uma vez
  useEffect(() => {
    const fetchUfs = async () => {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      const data = await response.json();
      setUfs(data);
    };
    fetchUfs();
  }, []);


  useEffect(() => {
    const fetchMunicipios = async () => {
      if (selectedUf) {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`);
        const data = await response.json();
        setMunicipios(data);
      }
    };

    fetchMunicipios();
  }, [selectedUf]);

  return (
    <div>
      <h1>Exercise 12</h1>
      <div>
        <label htmlFor="uf">Selecione uma UF:</label>
        <select
          id="uf"
          value={selectedUf}
          onChange={e => {
            setSelectedUf(e.target.value);
            setMunicipios([]); 
            setSelectedMunicipio('');
          }}
        >
          <option value="">Selecione uma UF</option>
          {ufs.map(uf => (
            <option key={uf.sigla} value={uf.sigla}>
              {uf.sigla} - {uf.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="municipio">Selecione um município:</label>
        <select
          id="municipio"
          value={selectedMunicipio}
          onChange={e => setSelectedMunicipio(e.target.value)}
          disabled={!municipios.length}
        >
          <option value="">Selecione um município</option>
          {municipios.map(municipio => (
            <option key={municipio.id} value={municipio.nome}>
              {municipio.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Exercise12;
