import Exchange from "../../Utils/Exchange.json";

const calculate = (sell,amount, buy) => 
{ 

  const sellCrypto = Object.keys(Exchange).find((cryptoKey) => Exchange[cryptoKey].name === sell);

  const buyCrypto = Object.keys(Exchange).find((cryptoKey) => Exchange[cryptoKey].name === buy);

  const sellValue = (Exchange[sellCrypto].value) * amount;

  const buyValue = Exchange[buyCrypto].value * amount;

  if(sell === "Bitcoin")
  {
    return buyValue;
  }

  return buyValue/sellValue ;

  



  
  // const rate =  (sell === "Bitcoin") ? CryptoValue : Exchange[sellCrypto].value / CryptoValue  ;

  // return rate * amount
 
};

export default calculate;
