import React from 'react';

import phones from './pictures/phones.png';
import appStore from './pictures/appStore.png';
import googlePlay from './pictures/googlePlay.png';

import './styles.scss';

const AppAdvertising = () => {

  return (
    <div className='app-advertising'>
      <div>
        <span className='headline'>
          Try the future, today.
          Download Crypto
        </span>

        <span className='label'>
          Stay connected to the market with our mobile app. Featuring advanced order types and analytical tools for experienced traders, as well as a simple buy & sell interface for those just getting started.
        </span>

        <div>
          <img src={appStore} />
          <img src={googlePlay} />
        </div>
      </div>

      <img src={phones} />
    </div>
  )
}

export default AppAdvertising;