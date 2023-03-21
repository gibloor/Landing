import React from 'react';

import cryptoPricesData from './cryptoPricesData';

import info from './pictures/info.svg';
import arrowUp from './pictures/arrowUp.svg';
import arrowDown from './pictures/arrowDown.svg';
import star from './pictures/star.svg';
import dots from './pictures/dots.svg';

import './styles.scss';

const CryptoPrices = () => {

  const USDFormat = (price: number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(price)
  }

  return (
    <div className='crypto-prices'>
      <span className='contents-table'>
        Today`s Cryptocurrency prices
      </span>

      <table className='crypto-prices__table table-text'>
        <tbody className='crypto-prices__tbody'>
          <tr>
            <th />
            <th>
              <div className='crypto-prices__with-picture_container'>
                <span> # </span>
                <img alt='arrow' src={arrowUp} className='crypto-prices__arrow-little' />
              </div>
            </th>
            <th> Name </th>
            <th> Price </th>
            <th> 24h % </th>
            <th> 7d % </th>
            <th>
              <div className='crypto-prices__with-picture_container'>
                Market Cap <img alt='information button' className='crypto-prices__information_button' src={info} />
              </div>
            </th>
            <th> volume(24h) </th>
            <th> Last 7 days </th>
          </tr>

          {cryptoPricesData.map((crypto, index) => (
            <tr key={index}>
              <th>
                <img alt='star' src={star} />
                {crypto.favorite}
              </th>

              <th> {index + 1} </th>

              <th>
                <div className='crypto-prices__with-picture_container'>
                  
                  <img alt='coin' src={process.env.PUBLIC_URL + `/cryptoPrices/${crypto.name}.png`} className='crypto-prices__coin_picture' />
                  {crypto.name}
                </div>
                
              </th>

              <th> {USDFormat(crypto.price)} </th>

              <th>
                <div className={`crypto-prices__with-picture_container ${crypto.dailyChanges >= 0 ? 'crypto-prices__growth' : 'crypto-prices__decline'}`}>
                  <img alt='arrow' src={crypto.dailyChanges >= 0 ? arrowUp : arrowDown} className='crypto-prices__arrow-big' />
                  {Math.abs(crypto.dailyChanges)}%
                </div>
              </th>

              <th>
                <div className={`crypto-prices__with-picture_container ${crypto.weeklyChanges >= 0 ? 'crypto-prices__growth' : 'crypto-prices__decline'}`}>
                  <img alt='arrow' src={crypto.weeklyChanges >= 0 ? arrowUp : arrowDown} className='crypto-prices__arrow-big' />
                  {Math.abs(crypto.weeklyChanges)}%
                </div>
              </th>

              <th> {USDFormat(crypto.marketCap)} </th>

              <th>
                <div className='crypto-prices__volume_container'>
                  <span>
                    {USDFormat(crypto.volume)}
                  </span>
                  <span className='crypto-prices__converted_volume'>
                    {Intl.NumberFormat('ja-JP', {}).format(crypto.volume / crypto.price)} {crypto.abbreviation}
                  </span>
                </div>
              </th>

              <th>
                <span> graphic </span>
                <img alt='dots' src={dots} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoPrices;