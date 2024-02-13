import { combineReducers, createStore } from "redux";
import { cryptoReducer, currencyReducer, marketDataReducer } from "./Reducer";

//Store

const store = createStore(
  combineReducers({
    currency: currencyReducer,
    crypto: cryptoReducer,
    market: marketDataReducer
  })
);

export default store;
