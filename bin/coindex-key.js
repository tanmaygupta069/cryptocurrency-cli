const program = require('commander')
const key = require('../commands/key');

program
.command('set')
.description("Set API Keys --Get at https://nomics.com")
.action(key.set)

program
.command('show')
.description("Show API Keys")
.action(key.show)

program
.command('remove')
.description("Remove API Keys")
.action(key.remove)

program.parse(process.argv)