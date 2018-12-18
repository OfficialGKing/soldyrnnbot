if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = bot.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);