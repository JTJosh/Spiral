const MessageHandler = require('discord-message-handler');
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"

const JOSH = "292971521159200768";
const WILLY = "259209114268336129";
client.on("debug", console.log);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
    if (message.author.bot) return;
    MessageHandler.handleMessage(message);
});
MessageHandler.whenMessageStartsWith(prefix+"help").then(message=>{
  message.reply('Commands:\n >Spreadsheet\n >Xena\n >ArX\n >Sinbadx\n >Trig\n >MeaningOfLife'+
  '\n >Umi\n >Willy\n >Embeds\n >Dreams\n >Hi\n >Warm\n >Pixel\n >Abooses\n >XenaCorrupt');
});
MessageHandler.whenMessageStartsWith(prefix+"welcome").then(message=>{
  if(message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send(`${message.guild.roles.get('305302877641900052')} Welcome to Sinbadx Knights! **If you would like to get verified and be able to speak in the other channels, please answer the following questions!**\n1. How did you hear about this server?\n2. Why did you join this server?\n3. Do you promise to read <#297263352252727296>?\n4. What is your favorite diep.io tank?\nMake sure you send your answers in this channel. (Do not message them)`);
  else message.reply('You do not have the permission: ADMINISTRATOR');
});
client.login(process.env.TOKEN);
