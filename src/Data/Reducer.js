import { SET_CRYPTO, SET_CURRENCY, SET_MARKET_DATA } from "./Constants";
import Market from "../Utils/Market.json"

//Currency Reducer
const initialState = {
  currency: {
    code: "INR",
    symbol: "₹",
  },
};
export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: {
          code: action.payload.code,
          symbol: action.payload.symbol,
        },
      };
    default:
      return state;
  }
};



const initialCrypto = {

    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 3918927,
    market_cap: 76920189650457,
    market_cap_rank: 1,
    fully_diluted_valuation: 82313277177531,
    total_volume: 1713802494911,
    high_24h: 3985751,
    low_24h: 3892595,
    price_change_24h: -32905.51879494963,
    price_change_percentage_24h: -0.83266,
    market_cap_change_24h: -518952313463.2031,
    market_cap_change_percentage_24h: -0.67014,
    circulating_supply: 19624100.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 5128383,
    ath_change_percentage: -23.56491,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 3993.42,
    atl_change_percentage: 98058.58807,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2024-02-10T17:58:58.125Z",
  
};
export const cryptoReducer = (state = initialCrypto, action) => {
  switch (action.type) {
    case SET_CRYPTO:
      return action.payload;

    default:
      return state;
  }
};



export const marketDataReducer = (state = Market  , action) => {
  switch(action.type) {
    case SET_MARKET_DATA:
      return action.payload;
    default:
    return state;
  }
}