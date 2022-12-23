const ethers = require("ethers");

const sendEthereum = async (from, to, amount, private_key) => {
    const provider = ethers.getDefaultProvider('rinkeby', {etherscan:"3WKBC35KHBKE4TGCH4M9PC8GHCN5BJ7MYT"});

}

modules.exports = sendEthereum