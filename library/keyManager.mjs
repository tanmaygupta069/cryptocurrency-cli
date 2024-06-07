import Configstore from 'configstore';
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

class KeyManager{
    constructor(){
        this.conf = new Configstore(pkg.name);
    }

    setKey(key){
        this.conf.set('apiKey',key)
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error("No such key exists.")
        }
        return key;
    }catch(err){
        console.log("Check your API Key.")
    }

    deleteKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error("No such key exists.")
        }

        this.conf.delete('apiKey');

        return key;
    }
}

export default KeyManager;