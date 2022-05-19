import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';

import './style.css';
import { Link } from 'react-router-dom';
import Test from '@pages/Test';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={'/'}>홈으로</Link>
        <Link to={'/test'}>테스트</Link>
      </nav>

      <h1>react18, webpack5, babel, eslint, prettier BoilerPlate</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
