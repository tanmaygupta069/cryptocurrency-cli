const inquirer = require('inquirer');
const colors = require('colors');
const { isRequired } = require('../utils/validation');


const key = {
    async set(){
            // Use keyManager here
        const KeyManagerModule = await import('../library/keyManager.mjs');
        const KeyManager = KeyManagerModule.default;
        const keyManager = new KeyManager();
        
        const input = await inquirer.prompt([{
            type:"input",
            name:"key",
            message:"Enter API Key ".green + "https://nomics.com",
            validate : isRequired
        }])

        const key = keyManager.setKey(input.key)
        if(key){
            console.log("API Key Set".blue);
        }
    },
    async show(){
        try{
            const KeyManagerModule = await import('../library/keyManager.mjs');
            const KeyManager = KeyManagerModule.default;
            const keyManager = new KeyManager();

            const key = keyManager.getKey();
            console.log("Current API Key: ",key.yellow);

            return key;

        }catch(err){
            console.error(err.message.red)
        }
    },
    async remove(){
        try{
            const KeyManagerModule = await import('../library/keyManager.mjs');
            const KeyManager = KeyManagerModule.default;
            const keyManager = new KeyManager();

            const key = keyManager.getKey();
            keyManager.deleteKey();
            console.log("Deleted API Key: ",key.cyan);

            return key;

        }catch(err){
            console.error(err.message.red)
        }
    } 
}

module.exports = key;