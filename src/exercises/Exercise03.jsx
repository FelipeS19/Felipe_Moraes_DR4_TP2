import{ useState } from 'react';

const Exercise03 = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const addUser = () => {
    setUsers([...users, { name, age }]);
    setName('');
    setAge(0);
  };

  const incrementAge = (index) => {
    const newUsers = [...users];
    newUsers[index].age += 1;
    setUsers(newUsers);
  };

  const decrementAge = (index) => {
    const newUsers = [...users];
    newUsers[index].age -= 1;
    setUsers(newUsers);
  };

  return (
    <div>
      <h1>Exercise 03</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
      <input value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Idade" />
      <button onClick={addUser}>Inserir</button>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>Idade: {user.age}</p>
          <button onClick={() => incrementAge(index)}>Incrementar</button>
          <button onClick={() => decrementAge(index)}>Decrementar</button>
        </div>
      ))}
    </div>
  );
};

export default Exercise03;
