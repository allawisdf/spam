const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530235932155183125")
setInterval(function() {
channel.send(`الصلاة والسلام عليك يا سيدي يا رسول الله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
