const CryptoAPI = require('../library/CryptoAPI')

const check = {
    async price(cmd){
        const KeyManagerModule = await import('../library/keyManager.mjs');
        const KeyManager = KeyManagerModule.default;
        const keyManager = new KeyManager();
    
        const key = keyManager.getKey();

        const api = new CryptoAPI(key);
        const priceOutputData = await api.getPriceData(cmd.coin,cmd.cur);
    
        console.log(priceOutputData)
    }
}

module.exports = check;