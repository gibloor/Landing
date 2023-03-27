import React, { useRef } from 'react';

import './styles.scss';

const SubscribeField = () => {

  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div className='subscribe-field'>
      <span className='subscribe-field__title'>
        Never miss a drop
      </span>
      <span className='subscribe-field__subtitle'>
        Subscribe for the latest news, drops & collectibles
      </span>
      
      <div onClick={() => ref.current && ref.current.focus()} className='subscribe-field__input_container'>
        <input
          ref={ref}
          placeholder='Enter your email address'
          type="text"
          className='subscribe-field__input'
        />
        <button
          className='subscribe-field__button'
          onClick={() => console.log('Subscribe')}
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default SubscribeField;