let getEthereumPrice = require('./market-cap');
let createEthereumWallet = require("./wallet-create");
let importWallet = require("./wallet-import");
let transactEther = require("./send-ethereum");

const MarketPriceMiddleWare = async (req, res, next) => {
    let market_price = await getEthereumPrice();
    req.result = market_price;
    next();
}

const CreateWalletMiddleware = async (req, res, next) => {
    let new_wallet = await createEthereumWallet();
    req.result = new_wallet;
    next();
}

const ImportWalletMiddleware = async (req, res, next) => {
    try {
        const private_key = req.body.private_key;
        req.result = await importWallet(private_key);
        next();
    } catch (err) { req.result = err; next(); }
}

const TransferEther = async (req, res, next) => {
    try {
        const result = transactEther();
        next();
    } catch (err) { req.result = err; next(); }
}

module.exports = { MarketPriceMiddleWare, CreateWalletMiddleware, ImportWalletMiddleware };