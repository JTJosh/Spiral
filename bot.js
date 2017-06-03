const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"

const JOSH = "292971521159200768";
const WILLY = "259209114268336129";
client.on("debug", console.log);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  let channel = msg.channel;

  if (msg.content === prefix + 'Sinbadx')
    channel.send('The one, the only!');

  else if (msg.content === prefix + 'MeaningOfLife')
    msg.reply('**42.**')

  else if (msg.content === prefix + 'Xena')
    channel.send('Do not touch my master!');

  else if (msg.content === prefix + 'Pixel')
    channel.send('Pixelate that. - Pixel, 2k17');

  else if (msg.content === prefix + 'Trig')
    channel.send('**TRIGGERED!**');

  else if (msg.content === prefix + 'ArX')
    channel.send('Run for your lives!! ArX will kill us all!');

  else if (msg.content === prefix + 'Hi')
    msg.channel.send('Hoi!');

  else if (msg.content === prefix + 'Dreams')
    msg.channel.send('Dreams will come true, just wait and see.');

  else if (msg.content === prefix + 'Umi')
    msg.channel.send('Credits go to my teacher, Umi.');

  else if (msg.content === prefix + 'Willy')
    msg.channel.send('Co-owner of Donuts. Special thanks.');

  else if (msg.content === prefix + 'Embeds')
      msg.channel.send('If you want embed magic without selfbot Download the app here: https://gitlab.com/garantiertnicht/DiscordEmbed/tags/0.5.2-rc  Make sure you have Java, if you have not, download here: www.java.com  Insert your credentials (Username and Password). Do not put in your token, only username and password. Have fun with the embeds ;)');

  else if (msg.content.startsWith(prefix + 'Warm'))
    msg.channel.send('Looks like someone is getting warmed again. -.- *Warms*');

  else if (msg.content.startsWith(prefix + 'Abooses'))
    msg.channel.send('*Abooses*');

  else if (msg.content.startsWith(prefix + 'help'))
	  msg.channel.send ('**Commands**\nXena\nArX\nSinbadx\nTrig\nMeaningOfLife\nUmi\nWilly\nEmbeds\nDreams\nHi\nWarm\nPixel\nAbooses');

  else if(msg.content.startsWith(prefix + 's')){
    if(msg.author.id == JOSH || msg.author.id == WILLY){
      channel.send(msg.content.split(' ').slice(1).join(' '));
      msg.delete();
    }
  }

  else if (msg.content === prefix + 'XenaCorrupt')
    channel.send('You may fall from the sky, you may fall from a tree. But the best way to fall, is in love with me. <3');
});

client.login(process.env.TOKEN);
