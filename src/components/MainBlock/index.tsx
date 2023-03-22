import React from 'react';

import logo from './pictures/logo.png';
import bitcoinStand from './pictures/bitcoinStand.png';
import scrool from './pictures/scrool.png';

import './styles.scss';

const MainBlock = () => {

  const headerButtons = ['Home', 'Company', 'About', 'Pricing', 'Team', 'Contact', 'Blog']

  return (
    <div className='main-block'>
      <div className='main-block__header'>
        <a href='./'>
          <img alt="logo" src={logo} className='main-block__logo' />
        </a>

        <div className='main-block__links'>
          {headerButtons.map(button => (
            <a href='./' key={button}>
              <span className='main-block__link label'>
                {button}
              </span>
            </a>
          ))}
        </div>
        <a href='./'>
          <span className='main-block__auth-button label'>
            Trade Now
          </span>
        </a>
      </div>

      <div className='main-block__content'>
        <div className='main-block__content_texts'>
          <span className='main-block__title title'>
            Make better businees with Cryptocurrency
          </span>

          <span className='main-block__text label'>
            We offers users a fully operational long-term rental platform. <br />
            It plans to leverages blockchain technology.
          </span>

          <a href='./'>
            <span className='main-block__full-color-link'>
              Get whitelisted
            </span>
          </a>
        </div>

        <img alt='bitcoin stand' src={bitcoinStand} />
      </div>

      <div className='main-block__scroll_container'>
        <img alt="scroll button" src={scrool} className='main-block__scroll' />
      </div>
    </div>
  )
}

export default MainBlock;