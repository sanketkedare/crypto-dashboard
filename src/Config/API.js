/* eslint-disable */

export const CoinList = (currency) => {
  return;
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
};

//Single Coin - description
export const SingleCoin = (id) => {
  return;
  `https://api.coingecko.com/api/v3/coins/${id}`;
};


//Market Cap
export const TrendingCoins = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h`;
};
