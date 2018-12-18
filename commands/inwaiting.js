if(cmd === `${prefix}inwaiting`){
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