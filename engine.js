const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const { MarketPriceMiddleWare, CreateWalletMiddleware, ImportWalletMiddleware, TransferEtherMiddleware } = require('./modules/middlewares');
const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));

//sending ethereum
(async function () {
    //const result = await transactEther('0x2A63E7b9F9d9674477c1F9AA78E0aBC5b6482cD7', '0x4C9cf493b01450D2Ce837Ba49D0c8D55C3182330', '0.001', '0xac9dc75cff8d5e17d4ba3f3b6ec3eeb27c0d5b5e2aad40eb0a3418e937a92f6a');
})();

app.get('/', (req, res, next) => {
    res.send("Latest Commit!!! Ethereum Wallet server running");
    res.end()
});

app.post('/marketprice', MarketPriceMiddleWare, (req, res) => {
    res.json(req.result);
});

app.post('/wallet/create', CreateWalletMiddleware, (req, res) => {
    res.json(req.result);
});

app.post('/wallet/import', ImportWalletMiddleware, (req, res) => {
    res.json(req.result);
});

app.post('/transfer', TransferEtherMiddleware, (req, res) => {
    res.json(req.result);
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${port}`);
});