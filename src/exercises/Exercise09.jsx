import{ useState } from 'react';
import { faker } from '@faker-js/faker';

const gerarNames = (num) => {
  return Array.from({ length: num }, () => faker.name.fullName());
};

const Exercise09 = () => {
  const [inputValue, setInputValue] = useState('');
  const names = gerarNames(10);
  const filteredNames = names.filter(name => name.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div>
      <h1>Exercise 09</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Digite para filtrar nomes"
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise09;
