const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.json');


client.on('message', async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = bot.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
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
    if(cmd ===  `consultation-on`) {
        if(!message.member.roles.some(r=>["Administrator", "Moderator", "Director", "Assistant Director", "Staff"].includes(r.name)) || message.author.hasPermission("ADMINISTRATOR") ) 
        return message.reply("You cannot do that.");
        let ConsultationRole = message.guild.roles.find(role => role.name === "Open For Consulatations");
        message.author.giveRole(consultationRole);
        return message.reply("You are now Open for Consultations");
    }
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
    
});

client.login(bot.token);