import React, { useState } from 'react';
import Example from '@components/Example';

const Home = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <div>
      <Example value="props 테스트" />
      <p>{number}</p>
      <button onClick={handleClick}>+버튼</button>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.REACT_APP_EXAMPLE}</p>
    </div>
  );
};

export default Home;
