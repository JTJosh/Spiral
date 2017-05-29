const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'Sinbadx')
    msg.channel.sendMessage('The one, the only!');
  else
  if (msg.content === prefix + 'Xena')
    msg.channel.sendMessage('Do not touch my master!');
  else
  if (msg.content === prefix + 'Pixel')
    msg.channel.sendMessage('Pixelate that. - Pixel, 2k17');
  else
  if (msg.content === prefix + 'ArX')
    msg.channel.sendMessage('Feel the power of the almighty ban hammer!');
});

client.login(process.env.TOKEN);
