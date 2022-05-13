import React from 'react';
import Example from '@components/Example';
import ExampleTwo from '@components/ExampleTwo';

function App() {
  return (
    <div className="App">
      리액트 보일러플레이트
      <Example value="벨류" />
      <ExampleTwo />
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.REACT_APP_EXAMPLE}</p>
    </div>
  );
}

export default App;
