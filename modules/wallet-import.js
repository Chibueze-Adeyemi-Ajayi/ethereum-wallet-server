const {ethers} = require("ethers");

// address: '0x573995a2594585a72256E23783f94f0DFadE974A',
// private_key: '0xf774a672d436d8ded72471d10ec3229bdc65db407463ab16f4982855d30a596f',
// mnemonics: {
//     phrase: 'suit athlete oyster staff sick trumpet worry discover bus cute crumble stem',
//     path: "m/44'/60'/0'/0/0",
//     locale: 'en'
//   }

const importWallet = async (private_key) => {
    const provider = ethers.getDefaultProvider('rinkeby', {etherscan:"3WKBC35KHBKE4TGCH4M9PC8GHCN5BJ7MYT"});
    const wallet = await new ethers.Wallet(private_key, provider);
    const address = await wallet.getAddress();
    let balance = await wallet.getBalance();
        balance = ethers.utils.formatEther(balance);
    return { address, private_key, balance }
}

module.exports = importWallet;