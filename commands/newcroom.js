const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.json');

if(message.author.bot) return;
if(message.content.indexOf(bot.prefix) !== 0) return;
const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(cmd === `new`) {
    message.reply("Creating Private Consultation Channel...");
message.guild.createChannel(`consultation-${message.author.id}`, "voice").then(c => {
let role = message.guild.roles.find("name", "Open for Consultations");
let role2 = message.guild.roles.find("name", "@everyone");
c.overwritePermissions(role, {
    'CONNECT': true,
    'VIEW_CHANNEL': true,
    'SPEAK': true
});
c.overwritePermissions(role2, {
    'CONNECT': false,
    'VIEW_CHANNEL': false
});
c.overwritePermissions(message.author, {
    'CONNECT': true,
    'VIEW_CHANNEL': true,
    'SPEAK': true
});
message.channel.send(`:white_check_mark: Your private consultation channel has been created.`);
}).catch(console.error);
}
