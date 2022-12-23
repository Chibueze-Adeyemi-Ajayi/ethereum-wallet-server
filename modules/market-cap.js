let eth_price = require("eth-price");

const getEthereumPrice = async () => {
   let price = await eth_price('usd, btc, xrp, bnb, ltc');
   return price;
}

module.exports = getEthereumPrice;