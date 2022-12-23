const {ethers} = require('ethers');

const createEthereumWallet = async () => {
    const provider = ethers.getDefaultProvider('rinkeby', {etherscan:"3WKBC35KHBKE4TGCH4M9PC8GHCN5BJ7MYT"});
    const wallet = await new ethers.Wallet.createRandom({provider});
    const address = await wallet.getAddress();
    const private_key = await wallet.privateKey;
    const public_key = await wallet.publicKey;
    const mnemonics = await wallet.mnemonic;
    return {address, private_key, public_key, mnemonics};
}

module.exports = createEthereumWallet;