import React from 'react';

import phones from './pictures/phones.png';
import appStore from './pictures/appStore.png';
import googlePlay from './pictures/googlePlay.png';

import './styles.scss';

const AppAdvertising = () => {

  return (
    <div className='app-advertising'>
      <div className='app-advertising__block'>
        <span className='app-advertising__title'>
          Try the future, today. <br />
          Download Crypto
        </span>

        <span className='app-advertising__text'>
          Stay connected to the market with our mobile app. Featuring advanced order types and analytical tools for experienced traders, as well as a simple buy & sell interface for those just getting started.
        </span>

        <img className='app-advertising__picture_mobile' alt='Two phones' src={phones} />

        <div className='app-advertising__buttons'>
          <a href='./' className='app-advertising__button_container'>
            <img className='app-advertising__button' alt='App store button' src={appStore} />
          </a>

          <a href='./' className='app-advertising__button_container'>
            <img className='app-advertising__button' alt='Google play button' src={googlePlay} />
          </a>
        </div>
      </div>

      <img className='app-advertising__picture_screen' alt='Two phones' src={phones} />
    </div>
  )
}

export default AppAdvertising;