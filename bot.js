const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  let channel = msg.channel;

  if (msg.content === prefix + 'Sinbadx')
    channel.send('The one, the only!');
  else
  if (msg.content === prefix + 'Xena')
    channel.send('Do not touch my master!');
  else
  if (msg.content === prefix + 'Pixel')
    channel.send('Pixelate that. - Pixel, 2k17');
  else
  if (msg.content === prefix + 'ArX')
    channel.send('Feel the power of the almighty ban hammer!');
    else
  if (msg.content === prefix + 'hi')
    channel.send('Hoi!');
    else
  if (msg.content === prefix + 'XenaCorrupt')
    channel.reply('You may fall from the sky, you may fall from a tree. But the best way to fall, is in love with me. <3');
    }
});

client.login(process.env.TOKEN);
