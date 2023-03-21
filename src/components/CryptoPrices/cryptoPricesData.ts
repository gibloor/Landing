type CryptoPricesData = {
  favorite: boolean,
  name: string,
  abbreviation: string,
  price: number,
  dailyChanges: number,
  weeklyChanges: number,
  marketCap: number,
  volume: number,
}

const cryptoPricesData: CryptoPricesData[] = [
  {
    favorite: false,
    name: 'Bitcoin',
    abbreviation: 'BTC',
    price: 28213.70,
    dailyChanges: 0.82,
    weeklyChanges: 15.75,
    marketCap: 544664238005,
    volume: 48811430117,
  },
  {
    favorite: false,
    name: 'Ethereum',
    abbreviation: 'ETH',
    price: 1779.40,
    dailyChanges: -0.25,
    weeklyChanges: 7.41,
    marketCap: 217974874830,
    volume: 11686112227,
  },
  {
    favorite: false,
    name: 'Cardano',
    abbreviation: 'ADA',
    price: 0.34,
    dailyChanges: -1.00,
    weeklyChanges: 5.51,
    marketCap: 11913125450,
    volume: 328553234,
  },
  {
    favorite: false,
    name: 'Tether',
    abbreviation: 'USDT',
    price: 1.00,
    dailyChanges: 0.022,
    weeklyChanges: -0.05,
    marketCap: 76361640967,
    volume: 57261072980,
  },
  {
    favorite: false,
    name: 'Avalanche',
    abbreviation: 'AVAX',
    price: 17.41,
    dailyChanges: -1.49,
    weeklyChanges: 9.41,
    marketCap: 5668388258,
    volume: 220583581,
  },
  {
    favorite: false,
    name: 'Algorand',
    abbreviation: 'ALGO',
    price: 16.61,
    dailyChanges: -2.18,
    weeklyChanges: 8.22,
    marketCap: 118372765728,
    volume: 6320358953,
  },
];

export default cryptoPricesData;