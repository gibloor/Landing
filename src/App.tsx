import CryptoPrices from 'components/CryptoPrices';
import MainBlock from 'components/MainBlock';
import React from 'react';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <MainBlock />
      <CryptoPrices />
    </div>
  );
}

export default App;
