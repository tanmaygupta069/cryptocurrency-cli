const program = require('commander')
const check =require('../commands/check');

program
.command('price')
.description("Check prices of coins")
.option("--coin <type>","Add specific coin types in CSV format",'bitcoin,ethereum,ripple')
.option('--cur <currency>',"Change the currency","usd")
.action((cmd)=>check.price(cmd))

program.parse(process.argv);