const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.json');

if(message.author.bot) return;
if(message.content.indexOf(bot.prefix) !== 0) return;
const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(cmd === `inwaiting`){
    let sicon = message.guild.iconURL;
    let membersWithRole = message.guild.members.filter(member => { 
    return member.roles.find("name","Waiting List");
    }).map(member => {
    return member;
    }) 
    
    let inwaitingEmbed = new Discord.RichEmbed()
    .setDescription("These are the current users with the role Waiting List")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .addField('Total Waiting Customers', `${membersWithRole}` );

    return message.channel.send(inwaitingEmbed);
}