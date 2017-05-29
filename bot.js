const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"

const JOSH = "292971521159200768";
const WILLY = "259209114268336129";

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
    msg.channel.send('Hoi!');
  else if(msg.content.startsWith(prefix + 's'))
    if(msg.author.id == JOSH || msg.author.id == WILLY){
      channel.send(msg.content.split(' ').slice(1).join(' '));
      msg.delete();
    }
});

client.login(process.env.TOKEN);
