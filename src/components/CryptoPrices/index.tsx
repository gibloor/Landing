import React from 'react';

import cryptoPricesData from './cryptoPricesData';

import info from './pictures/info.svg';
import arrowUp from './pictures/arrowUp.svg';
import clearArrowUp from './pictures/clearArrowUp.svg';
import arrowDown from './pictures/arrowDown.svg';
import star from './pictures/star.svg';
import badStock from './pictures/badStock.svg';
import goodStock from './pictures/goodStock.svg';

import './styles.scss';

const CryptoPrices = () => {

  const USDFormat = (price: number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(price);
  }

  return (
    <div className='crypto-prices'>
      <span className='headline crypto-prices__title'>
        Today`s Cryptocurrency prices
      </span>

      <table className='crypto-prices__table table-text'>
        <tbody className='crypto-prices__tbody'>
          <tr>
            <th className='crypto-prices__1200hide' />
            <th className='crypto-prices__1200hide'>
              <div className='crypto-prices__with-picture_container'>
                <span> # </span>
                <img alt='arrow' src={clearArrowUp} className='crypto-prices__arrow-little' />
              </div>
            </th>
            <th className='crypto-prices__name_tr'> Name </th>
            <th> Price </th>
            <th className='crypto-prices__900hide'> 24h % </th>
            <th className='crypto-prices__900hide'> 7d % </th>
            <th className='crypto-prices__500hide'>
              <div className='crypto-prices__with-picture_container'>
                Market Cap <img alt='information button' className='crypto-prices__information_button' src={info} />
              </div>
            </th>
            <th className='crypto-prices__700hide'> Volume(24h) </th>
            <th className='crypto-prices__1200hide'> Last 7 days </th>
          </tr>

          {cryptoPricesData.map((crypto, index) => (
            <tr key={index}>
              <th className='crypto-prices__1200hide'>
                <img alt='star' src={star} />
                {crypto.favorite}
              </th>

              <th className='crypto-prices__1200hide'> {index + 1} </th>

              <th className='crypto-prices__first-rate_tr'>
                <div className='crypto-prices__with-picture_container crypto-prices__name_tr'>
                  <img alt='coin' src={process.env.PUBLIC_URL + `/cryptoPrices/${crypto.name}.png`} className='crypto-prices__coin_picture' />
                  {crypto.name}
                </div>
              </th>

              <th> {USDFormat(crypto.price)} </th>

              <th className='crypto-prices__900hide'>
                <div className={`crypto-prices__with-picture_container ${crypto.dailyChanges >= 0 ? 'crypto-prices__growth' : 'crypto-prices__decline'}`}>
                  <img alt='arrow' src={crypto.dailyChanges >= 0 ? arrowUp : arrowDown} className='crypto-prices__arrow-big' />
                  {Math.abs(crypto.dailyChanges)}%
                </div>
              </th>

              <th className='crypto-prices__900hide'>
                <div className={`crypto-prices__with-picture_container ${crypto.weeklyChanges >= 0 ? 'crypto-prices__growth' : 'crypto-prices__decline'}`}>
                  <img alt='arrow' src={crypto.weeklyChanges >= 0 ? arrowUp : arrowDown} className='crypto-prices__arrow-big' />
                  {Math.abs(crypto.weeklyChanges)}%
                </div>
              </th>

              <th className='crypto-prices__500hide'> {USDFormat(crypto.marketCap)} </th>

              <th className='crypto-prices__700hide'>
                <div className='crypto-prices__volume_container'>
                  <div className='crypto-prices__volume_block'>
                    <span> {USDFormat(crypto.volume)} </span>
                    <span className='crypto-prices__converted_volume'>
                      {Intl.NumberFormat('en-IN', { maximumSignificantDigits: 10 }).format(crypto.volume / crypto.price)} {crypto.abbreviation}
                    </span>
                  </div>
                </div>
              </th>

              <th className='crypto-prices__1200hide'>
                <div className='crypto-prices__stock_container'>
                  <img alt='stock' className='crypto-prices__stock' src={crypto.weeklyChanges >= 0 ? goodStock : badStock} />
                  <button className='crypto-prices__configs_button' />
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoPrices;