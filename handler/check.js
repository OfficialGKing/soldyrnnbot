const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.json');
const core = require("../core.js");

if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = bot.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);