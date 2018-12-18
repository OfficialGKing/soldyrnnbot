const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.json');

if(cmd ===  `${prefix}consultation-on`) {
    let perms = message.member.permissions;
    let has_admin = perms.has("ADMINISTRATOR");
    let role = message.member.roles;
    let has_designer = role.has('name', 'Design Team');
    if(has_admin == true || has_designer == true){
        let role = message.guild.roles.find(r => r.name === "Open for Consultations");
        let servericon = message.guild.iconURL;
        let member = message.author;
        member.addRole(role).catch(console.error);
        let roleemebed = new Discord.RichEmbed()
        .setDescription("You've been added to the role Open for Consultations")
        .setColor("#FF000")
        .setThumbnail(servericon)
        .addField("", "You've opened yourself to Consultations!");

        return message.channel.send(roleemebed);
    }
}