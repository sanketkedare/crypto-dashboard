import Exchange from "../../Utils/Exchange.json";

const calculate = (sell, amount, buy) => {
  // Find the key (cryptocurrency) in Exchange.json that matches the sell and buy names
  const sellCrypto = Object.keys(Exchange).find(
    (cryptoKey) => Exchange[cryptoKey].name === sell
  );

  const buyCrypto = Object.keys(Exchange).find(
    (cryptoKey) => Exchange[cryptoKey].name === buy
  );

  // Calculate the value in terms of the sell and buy currencies
  const sellValue = Exchange[sellCrypto].value * amount;
  const buyValue = Exchange[buyCrypto].value * amount;

  // Calculate and return the exchange rate
  if (sell === "Bitcoin") {
    return buyValue; // Directly return the buyValue if selling Bitcoin
  }

  return buyValue / sellValue; // Otherwise, calculate the ratio of buy to sell value
};

export default calculate;
