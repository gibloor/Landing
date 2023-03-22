import React from 'react';

import phones from './pictures/phones.png';
import appStore from './pictures/appStore.png';
import googlePlay from './pictures/googlePlay.png';

import './styles.scss';

const AppAdvertising = () => {

  return (
    <div className='app-advertising'>
      <div className='app-advertising__block'>
        <span className='headline app-advertising__title'>
          Try the future, today. <br />
          Download Crypto
        </span>

        <span className='label app-advertising__text'>
          Stay connected to the market with our mobile app. Featuring advanced order types and analytical tools for experienced traders, as well as a simple buy & sell interface for those just getting started.
        </span>

        <div className='app-advertising__buttons'>
          <a className='app-advertising__button'>
            <img alt='App store button' src={appStore} />
          </a>

          <a>
            <img alt='Google play button' src={googlePlay} />
          </a>
        </div>
      </div>

      <img alt='Two phones' src={phones} />
    </div>
  )
}

export default AppAdvertising;