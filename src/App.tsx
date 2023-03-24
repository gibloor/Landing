import React from 'react';

import AppAdvertising from 'components/AppAdvertising';
import Articles from 'components/Articles';
import CryptoPrices from 'components/CryptoPrices';
import MainBlock from 'components/MainBlock';
import ShortInfo from 'components/ShortInfo';
import SubscribeField from 'components/SubscribeField';
import Footer from 'components/Footer';

import './App.scss';

function App() {
  return (
    <div className='app'>
      TEST TIME
      <MainBlock />
      <CryptoPrices />
      <ShortInfo />
      <AppAdvertising />
      <Articles />
      <SubscribeField />
      <Footer />
    </div>
  );
}

export default App;
