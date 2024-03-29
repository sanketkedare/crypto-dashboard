export const MarketData = (curr) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en`;

export const HistoricalChart = (id = 'bitcoin', days, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
