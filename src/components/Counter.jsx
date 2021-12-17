import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(12);
  

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default Counter;