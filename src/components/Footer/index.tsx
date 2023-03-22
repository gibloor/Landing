import React from 'react';

import columns from './columns';

import facebook from './pictures/facebook.svg';
import instagram from './pictures/instagram.svg';
import linkedIn from './pictures/linkedIn.svg';
import twitter from './pictures/twitter.svg';

import './styles.scss';

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer__paragraphs' style={{ width: `${columns.length * 250}px` }}>
        {columns.map(column => (
          <div key={column.title} className='footer__paragraphs_block'>
            <span className='footer__title'>
              {column.title}
            </span>

            {column.paragraphs.map(paragraph => (
              <a href='./' key={paragraph} className='footer__paragraph'>
                <span>
                  {paragraph}
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className='footer__footer' style={{ width: `${columns.length * 250}px` }}>
        <span className='footer__paragraph'> Copyright 2021, Cryptous </span>
        <div className='footer__social_media'>
          <a href='./'>
            <img alt='facebook' src={facebook} />
          </a>

          <a href='./'>
            <img alt='twitter' src={twitter} />
          </a>

          <a href='./'>
            <img alt='linkedIn' src={linkedIn} />
          </a>

          <a href='./'>
            <img alt='instagram' src={instagram} />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer;