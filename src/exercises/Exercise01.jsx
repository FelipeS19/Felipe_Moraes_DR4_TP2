import { useState } from 'react';

const Exercise01 = () => {
  const [user, setUser] = useState({ name: 'John', age: 25 });

  const incrementAge = () => setUser({ ...user, age: user.age + 1 });
  const decrementAge = () => setUser({ ...user, age: user.age - 1 });

  return (
    <div>
      <h1>Exercise 01</h1>
      <h2>{user.name}</h2>
      <p>Idade: {user.age}</p>
      <button onClick={incrementAge}>Incrementar</button>
      <button onClick={decrementAge}>Decrementar</button>
    </div>
  );
};

export default Exercise01;