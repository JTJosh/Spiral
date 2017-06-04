const MessageHandler = require('discord-message-handler');
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "'"

const JOSH = "292971521159200768";
const WILLY = "259209114268336129";
client.on("debug", console.log);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
    if (message.author.bot) return;
    MessageHandler.handleMessage(message);
    MessageHandler.setCaseSensitive(false);
});
MessageHandler.whenMessageStartsWith("{ban").then(message=>{
  message.reply('User banned succesfully!');
});
MessageHandler.whenMessageStartsWith(prefix+"MeaningOfLife").then(message=>{
  message.reply(' **42!**');
});
MessageHandler.whenMessageStartsWith(prefix+"help").then(message=>{
  message.reply('**Commands:**\n >Spreadsheet\n >Xena\n >ArX\n >Sinbadx\n >Trig\n >MeaningOfLife'+
  '\n >Umi\n >Willy\n >Embeds\n >Dreams\n >Warm\n >Pixel\n >Abooses\n >XenaCorrupt');
});
MessageHandler.whenMessageStartsWith(prefix+"welcome").then(message=>{
 if(message.member.hasPermission("ADMINISTRATOR"))
  message.channel.send(`${message.guild.roles.get('305302877641900052')} Welcome to Sinbadx Knights! **If you would like to get verified and be able to speak in the other channels, please answer the following questions!**\n1. How did you hear about this server?\n2. Why did you join this server?\n3. Do you promise to read <#297263352252727296>?\n4. What is your favorite diep.io tank?\nMake sure you send your answers in this channel. (Do not message them)`);
  else message.reply('You do not have the permission: ADMINISTRATOR');
});
MessageHandler.whenMessageStartsWith(prefix+"Sinbadx").then(message=>{
  message.channel.send('The one, the only! Sinbadx.');
});
MessageHandler.whenMessageStartsWith(prefix+"ArX").then(message=>{
  message.channel.send('Run for your lives!! ArX will kill us all!!');
});
MessageHandler.whenMessageStartsWith(prefix+"Xena").then(message=>{
  message.channel.send('Do not touch my master! *Growls*');
});
MessageHandler.whenMessageStartsWith(prefix+"Spreadsheet").then(message=>{
  message.channel.send('The spreadsheet can be found at this site: https://docs.google.com/spreadsheets/d/18HlGT-Ys2Z5mFTD18QZeFgnVQunf1LqT5VxnddDnbuw/edit?usp=sharing');
});
MessageHandler.whenMessageStartsWith(prefix+"Embeds").then(message=>{
  message.channel.send('If you want embed magic without a selfbot required, download the app here: https://gitlab.com/garantiertnicht/DiscordEmbed/tags/0.5.2-rc  Make sure you have Java, if you have not, download here: www.java.com . Insert your credentials (Username and Password). Do not put in your token, only username and password. Have fun with the embeds!');
});
MessageHandler.whenMessageStartsWith(prefix+"XenaCorrupt").then(message=>{
  message.channel.send('You may fall from the sky, you may fall from a tree. But the best way to fall, is in love with me. <3');
});
MessageHandler.whenMessageStartsWith(prefix+"Dreams").then(message=>{
  message.channel.send('Dreams will come true, just wait and see.');
});
MessageHandler.whenMessageStartsWith(prefix+"Umi").then(message=>{
  message.channel.send('Thanks to my teacher, Umi.');
});
MessageHandler.whenMessageStartsWith(prefix+'Warm').then(message=>{
  message.channel.send('*Warms.*')
});
MessageHandler.whenMessageStartsWith(prefix+"Willy").then(message=>{
  message.channel.send('Co-creator of Donuts. Special thanks.');
});
MessageHandler.whenMessageStartsWith(prefix+"Aboose").then(message=>{
  message.channel.send('*Aboooooses. Aboose Police on their way. :3*');
});
MessageHandler.whenMessageStartsWith(prefix+"Trig").then(message=>{
  message.channel.send('**TRIGGERED AF!!!**');
});
MessageHandler.whenMessageStartsWith(prefix+'s').then(message=>{
  if(message.author.id == JOSH || message.author.id == WILLY){
      message.channel.send(message.content.split(' ').slice(1).join(' '));
      message.delete();
    }
});

client.login(process.env.TOKEN);
