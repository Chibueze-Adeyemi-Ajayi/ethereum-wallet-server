const express = require('express');
const helmet = require('helmet');
const {MarketPriceMiddleWare} = require('./modules/middlewares');
const app = express();
const port = process.env.PORT || 5000;

// market cap module
(async function () {
    //let ethereum_price = await getEthereumPrice();
    //console.log(ethereum_price);
})();

// creating ethereum wallet
(async function () {
    // const wallet = await createEthereumWallet();
    // console.log(wallet);
})();

// importing ethereum wallet
(async function () {
    // const wallet = await importWallet("0xac9dc75cff8d5e17d4ba3f3b6ec3eeb27c0d5b5e2aad40eb0a3418e937a92f6a");
    // console.log(wallet);
})();

//sending ethereum
(async function () {
    //const result = await transactEther('0x2A63E7b9F9d9674477c1F9AA78E0aBC5b6482cD7', '0x4C9cf493b01450D2Ce837Ba49D0c8D55C3182330', '0.001', '0xac9dc75cff8d5e17d4ba3f3b6ec3eeb27c0d5b5e2aad40eb0a3418e937a92f6a');
})();

app.get('/', (req, res, next) => {
    res.send("Ether Wallet Server, Hurray!!!!!");
    res.end()
});

app.post('/wallet/create', MarketPriceMiddleWare, (req, res, next) => {

})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${port}`);
});