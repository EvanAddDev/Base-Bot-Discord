const Discord = require('discord.js');
const cfg = require("../config")

module.exports = async (bot, message) => {
    let prefix = cfg.bot.prefix;

    let messageArray = message.content.split(" ");
    let commandName = messageArray[0].slice(prefix.length);
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;

    let command = require(`../Commands/${commandName}`);
    if (!command) return message.reply("That command doesn't exist!");

    command.run(bot, message);
}