const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.json');
const core = require("../core.js");

if(message.author.bot) return;
if(message.content.indexOf(bot.prefix) !== 0) return;
const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(cmd === `info`){
    let sicon = message.guild.iconURL;
    let UserswithRole = message.member.roles('name', 'Bot');
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server information!")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .addField("My Name", client.user.username)
    .addField("Server Name", message.guild.name)
    .addField("Server Owner", message.guild.owner)
    .addField("Created On", message.guild.createdAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Total Bots", `${UserswithRole.size}`);
    

    return message.channel.send(serverembed);
}