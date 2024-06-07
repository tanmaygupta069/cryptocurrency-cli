const axios = require('axios');
const colors = require('colors');
require('dotenv').config();


class CrypoAPI{
    constructor(apiKey){
        this.apiKey = apiKey || process.env.API_KEY;
        this.baseURL = 'https://api.coingecko.com/api/v3/coins/'
        this.options = {
            method: 'GET',
            headers: {
                accept: 'application/json', 
                'x-cg-demo-api-key': this.apiKey
            }
        }
    }

    async getPriceData(coin,cur){
        try{
            const formatter = new Intl.NumberFormat('en-US',{
                style:'currency',
                currency: cur
            })
            const res = await axios.get(`${this.baseURL}markets?vs_currency=${cur}&ids=${coin}`);
            
            let output = '';

            res.data.forEach(element => {
                output += `Coin : ${element.symbol.toUpperCase().yellow} (${element.id} | Price : ${formatter.format(element.current_price).green} | Rank : ${element.market_cap_rank})\n`
            });

            return output;
        }   

        catch(err){
            console.log(err.message);
        }
    }
}

module.exports = CrypoAPI;
