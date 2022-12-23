const {ethers} = require("ethers");

const importWallet = async (private_key) => {
    const provider = ethers.getDefaultProvider('goerli', {etherscan:"3WKBC35KHBKE4TGCH4M9PC8GHCN5BJ7MYT"});
    const wallet = await new ethers.Wallet(private_key, provider);
    const address = await wallet.getAddress();
    let balance = await wallet.getBalance();
        balance = ethers.utils.formatEther(balance);
    return {wallet, address, private_key, balance }
}

module.exports = importWallet;