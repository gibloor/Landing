import React from 'react';

import './styles.scss';

const SubscribeField = () => {

  return (
    <div className='subscribe-field'>
      <span className='subscribe-field__title'> Never miss a drop </span>
      <span className='subscribe-field__subtitle'> Subscribe for the latest news, drops & collectibles </span>
      
      <div className='subscribe-field__input_container'>
        <input type="text" className='subscribe-field__input' />
        <button>X</button>
      </div>
    </div>
  )
}

export default SubscribeField;