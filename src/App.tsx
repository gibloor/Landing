import CryptoPrices from 'components/CryptoPrices';
import MainBlock from 'components/MainBlock';
import ShortInfo from 'components/ShortInfo/ShortInfo';
import React from 'react';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <MainBlock />
      <CryptoPrices />
      <ShortInfo />
    </div>
  );
}

export default App;
