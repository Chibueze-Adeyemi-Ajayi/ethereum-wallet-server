const express = require('express');
const helmet = require('helmet');
const getEthereumPrice = require('./modules/market-cap');
const createEthereumWallet = require('./modules/wallet-create');
const importWallet = require('./modules/wallet-import');
const app = express();
const port = process.env.PORT || 5000;

// market cap module
(async function () {
    let ethereum_price = await getEthereumPrice();
    //console.log(ethereum_price);
})();

// creating ethereum wallet
(async function () {
    const wallet = await createEthereumWallet();
    //console.log(wallet);
})();

// importing ethereum wallet
(async function () {
    const wallet = await importWallet("0xf774a672d436d8ded72471d10ec3229bdc65db407463ab16f4982855d30a596f");
    console.log(wallet);
})();

// app.get('/', (req, res, next) => {
//     //res.sendStatus(200);
//     res.send("Hello world! modified");
//     res.end()
// });

// app.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`Server listening on port ${port}`);
// });