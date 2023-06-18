const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const loadCommands = require('./Loader/loadCommands');
const loadEvents = require('./Loader/loadEvents');
const cfg = require('./config');


bot.commands = new Discord.Collection();

bot.login(cfg.bot.token);

console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`Starting bot...`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
loadCommands(bot);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
loadEvents(bot);


