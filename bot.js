const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"

const JOSH = "292971521159200768";
const WILLY = "259209114268336129";
client.on("debug", console.log);
client.on('ready', () => {
  console.log(`I am ready!`);
});

client.on('message', message => {
  let channel = message.channel;

  if (message.content.startsWith(prefix + 'status')) {

  message.channel.send({embed: {
      color: 1290103,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: 'Bot status',

      description: '`Working.`',
      fields: [{
          name: 'System status:',
          value: '**__All systems and modules functioning properly__**'
        },
        {
          name: 'Packet time:',
          value: `\`${Date.now() - message.createdTimestamp} ms\``
        },
  {
          name: 'Uptime:',
          value: `\`${process.uptime()} seconds\``
        },
        {
          name: 'Avatar:',
          value: 'https://images-ext-1.discordapp.net/.eJwFwW0OwiAMANC7cABavgZdYjxLLUyX6EYA92PGu--9n_q2t5rVa4zaZwDJm85rl71lrlXL_gE-eHDr4Eya0BGhjc4FStFDoMUbEhaPjyRIJTKXYHMwU0Qk0nV73vt6lptFn9T_AohLIRY.DAP1B8BhF5M5YeVpwoK2kW_ov0c'
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: 'Bot Status'
      }
    }
  });
   }

  else if (message.content === prefix + 'Sinbadx')
    channel.send('The one, the only!');

  else if (message.content === prefix + 'MeaningOfLife')
    msg.reply('**42.**')

  else if (message.content === prefix + 'Xena')
    message.channel.send('Do not touch my master!');

  else if (message.content === prefix + 'Pixel')
    message.channel.send('Pixelate that. - Pixel, 2k17');

  else if (message.content === prefix + 'Trig')
    message.channel.send('**TRIGGERED!**');

  else if (message.content === prefix + 'ArX')
    message.channel.send('Run for your lives!! ArX will kill us all!');

  else if (message.content === prefix + 'Hi')
    message.channel.send('Hoi!');

  else if (message.content === prefix + 'Dreams')
    message.channel.send('Dreams will come true, just wait and see.');

  else if (message.content === prefix + 'Umi')
    message.channel.send('Credits go to my teacher, Umi.');

  else if (message.content === prefix + 'Willy')
    message.channel.send('Co-owner of Donuts. Special thanks.');

  else if (message.content === prefix + 'Embeds')
    message.channel.send('If you want embed magic without selfbot Download the app here: https://gitlab.com/garantiertnicht/DiscordEmbed/tags/0.5.2-rc  Make sure you have Java, if you have not, download here: www.java.com  Insert your credentials (Username and Password). Do not put in your token, only username and password. Have fun with the embeds ;)');

  else if (message.content.startsWith(prefix + 'Warm'))
    message.channel.send('Looks like someone is getting warmed again. -.- *Warms*');

  else if (message.content.startsWith(prefix + 'Abooses'))
    message.channel.send('*Abooses*');

  else if (message.content.startsWith(prefix + 'welcome'))
    message.channel.send(`${message.guild.roles.get('305302877641900052')} Welcome to Sinbadx Knights! **If you would like to get verified and be able to speak in the other channels, please answer the following questions!**\n1. How did you hear about this server?\n2. Why did you join this server?\n3. Do you promise to read <#297263352252727296>?\n4. What is your favorite diep.io tank?\nMake sure you send your answers in this channel. (Do not message them)`);

  else if (message.content.startsWith(prefix + 'help'))
	  message.channel.send ('**Commands:**\n >Spreadsheet\n >Xena\n >ArX\n >Sinbadx\n >Trig\n >MeaningOfLife\n >Umi\n >Willy\n >Embeds\n >Dreams\n >Hi\n >Warm\n >Pixel\n >Abooses\n >XenaCorrupt');

  else if (message.content.startsWith(prefix + 'Spreadsheet'))
    message.channel.send ('The spreadsheet can be found at this site: https://docs.google.com/spreadsheets/d/18HlGT-Ys2Z5mFTD18QZeFgnVQunf1LqT5VxnddDnbuw/edit?usp=sharing ');

  else if (message.content === prefix + 'XenaCorrupt')
    message.channel.send('You may fall from the sky, you may fall from a tree. But the best way to fall, is in love with me. <3');

});

client.login(process.env.TOKEN);
