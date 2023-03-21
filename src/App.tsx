import AppAdvertising from 'components/AppAdvertising';
import CryptoPrices from 'components/CryptoPrices';
import MainBlock from 'components/MainBlock';
import ShortInfo from 'components/ShortInfo';
import React from 'react';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <MainBlock />
      <CryptoPrices />
      <ShortInfo />
      <AppAdvertising />
    </div>
  );
}

export default App;
