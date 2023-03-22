import React from 'react';

import './styles.scss';

const SubscribeField = () => {

  return (
    <div className='subscribe-field'>
      <span className='subscribe-field__title'> Never miss a drop </span>
      <span className='subscribe-field__subtitle'> Subscribe for the latest news, drops & collectibles </span>
      
      <div className='subscribe-field__input_container'>
        <input placeholder='Enter your email address' type="text" className='subscribe-field__input' />
        <button className='subscribe-field__button'> Subscribe </button>
      </div>
    </div>
  )
}

export default SubscribeField;