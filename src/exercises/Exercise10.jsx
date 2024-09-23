import  { useState } from 'react';
import { faker } from '@faker-js/faker';

const gerardados = (num) => {
  return Array.from({ length: num }, () => ({
    name: faker.name.fullName(),
    job: faker.name.jobTitle(),
  }));
};

const Exercise10 = () => {
  const [inputValue, setInputValue] = useState('');
  const data = gerardados(10);
  const filteredData = data.filter(item => 
    item.name.toLowerCase().startsWith(inputValue.toLowerCase()) || 
    item.job.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>Exercise 10 </h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Digite para filtrar nomes ou cargos"
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name} - {item.job}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;
