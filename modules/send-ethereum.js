const ethers = require("ethers");
const importWallet = require("./wallet-import");

const transactEther = async (from, to, amount, private_key) => {
    const provider = ethers.getDefaultProvider('goerli', {etherscan:"3WKBC35KHBKE4TGCH4M9PC8GHCN5BJ7MYT"});
    const wallet = await importWallet(private_key);

    if (amount > wallet.balance) return {
        code: 409,
        status: "Operation failed",
        message: "Insufficient fund in balance",
        result: wallet
    }

    const gasPrice = await provider.getGasPrice();
    const block = await provider.getBlockNumber();

    const tx = {
        from: from,
        to: to.toString(),
        value: ethers.utils.parseUnits(amount.toString(), 'ether'),
        gasPrice: gasPrice,
        gasLimit: ethers.utils.parseUnits('0.00000000000003', 'ether'),
        nonce: provider.getTransactionCount(from, block)
    };

    try {
                    
        const signer = wallet.wallet;
        const transaction = await signer.sendTransaction(tx);
        const result = await transaction.wait();

        let log = result.logs, code = 400;

        if (log.length == 0) {
            console.log(`You just sent ` + amount + `ETH to ` + to);
            code = 200;
            return {
                code: 200,
                status: "Transaction complete",
                message: "Transaction completed",
                result: result
            }
    
        }

        console.log(`Unable to instantiate transaction`);

        console.log(result);

        return {
            code: code,
            status: "Transaction complete",
            message: "Transaction completed",
            result: result
        }

    } catch (exp) {
        return {
            code: 400,
            status: "Transaction failed",
            message: "Transaction failed",
            result: []
        }
    }

}

module.exports = transactEther;