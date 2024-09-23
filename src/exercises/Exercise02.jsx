import { useReducer } from 'react';

const usoReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, age: state.age + 1 };
    case 'decrement':
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};

const Exercise02 = () => {
  const [user, dispatch] = useReducer(usoReducer, { name: 'John', age: 25 });

  return (
    <div>
      <h1>Exercise 02</h1>
      <h2>{user.name}</h2>
      <p>Idade: {user.age}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
};

export default Exercise02;
