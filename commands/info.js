if(cmd === `${prefix}info`){
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