const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.json');
const core = require("../core.js");

if(message.author.bot) return;
if(message.content.indexOf(bot.prefix) !== 0) return;
const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(cmd ===  `consultation-on`) {
if(!message.member.roles.some(r=>["Administrator", "Moderator", "Director", "Assistant Director", "Staff"].includes(r.name)) || message.author.hasPermission("ADMINISTRATOR") ) 
return message.reply("You cannot do that.");
let ConsultationRole = message.guild.roles.find(role => role.name === "Open For Consulatations");
message.author.giveRole(consultationRole);
return message.reply("You are now Open for Consultations");
}