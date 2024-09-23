import { useState, useMemo } from 'react';

const Exercise07 = () => {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    const calcFactorial = (n) => (n <= 1 ? 1 : n * calcFactorial(n - 1));
    return calcFactorial(number);
  }, [number]);

  return (
    <div>
      <h1>Exercise 07 </h1>
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <p>Fatorial: {factorial}</p>
    </div>
  );
};

export default Exercise07;
