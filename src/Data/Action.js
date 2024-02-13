import { SET_CURRENCY, SET_CRYPTO, SET_MARKET_DATA } from "./Constants";

export const setCurrency = (currencyCode, currencySymbol) => ({
  type: SET_CURRENCY,
  payload: { code: currencyCode, symbol: currencySymbol },
});

export const setCrypto = (crypto) => ({
  type: SET_CRYPTO,
  payload: crypto
});


export const setMarketData = (marketData) => ({
  type:SET_MARKET_DATA,
  payload:marketData
})