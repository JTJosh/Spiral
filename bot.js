
/* eslint linebreak-style: "off" */
const Discord = require("discord.js");
const client = new Discord.Client();
const Constants = require('./lib/dependencies/Constants');
client.on("debug", console.log);
client.on("ready", () => {
  client.user.setGame(">help");
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
  const prefix = Constants.prefix;
  const channel = message.channel;

  if (message.content === prefix + 'Ban')
    message.reply('User banned succesfully!');

  else if (message.content === prefix + 'XenaCorrupt')
    channel.send('You may fall from the sky, you may fall from a tree. But the best way to fall, is in love with me. <3');

  else if (message.content === prefix + 'Sinbadx')
    channel.send('The one, the only!');

  else if (message.content === prefix + 'MeaningOfLife')
    message.reply('**42.**');

  else if (message.content === prefix + 'Xena')
    channel.send('Do not touch my master!');

  else if (message.content === prefix + 'Pixel')
    channel.send('Pixelate that. - Pixel, 2k17');

  else if (message.content === prefix + 'Trig')
    channel.send('**TRIGGERED!**');

  else if (message.content === prefix + 'ArX')
    channel.send('Run for your lives!! ArX will kill us all!');

  else if (message.content === prefix + 'Hi')
    channel.send('Hoi!');

  else if (message.content === prefix + 'Dreams')
    channel.send('Dreams will come true, just wait and see.');

  else if (message.content === prefix + 'Umi')
    channel.send('Credits go to my teacher, Umi.');

  else if (message.content === prefix + 'Willy')
    channel.send('Co-owner of Donuts. Special thanks.');

  else if (message.content === prefix + 'Embeds')
    channel.send('If you want embed magic without selfbot Download the app here: https://gitlab.com/garantiertnicht/DiscordEmbed/tags/0.5.2-rc  Make sure you have Java, if you have not, download here: www.java.com  Insert your credentials (Username and Password). Do not put in your token, only username and password. Have fun with the embeds ;)');

  else if (message.content.startsWith(prefix + 'Warm'))
    channel.send('Looks like someone is getting warmed again. -.- *Warms*');

  else if (message.content.startsWith(prefix + 'Abooses'))
    channel.send('*Abooses*');

  else if (message.content.startsWith(prefix + 'welcome')){
    if(message.member.hasPermission("ADMINISTRATOR"))
      channel.send(`${message.guild.roles.get('305302877641900052')} Welcome to Sinbadx Knights! **If you would like to get verified and be able to speak in the other channels, please answer the following questions!**\n1. How did you hear about this server?\n2. Why did you join this server?\n3. Do you promise to read <#297263352252727296>?\n4. What is your favorite diep.io tank?\nMake sure you send your answers in this channel. (Do not message them)`);
    else message.reply('You do not have the permission: ADMINISTRATOR');
  }

  else if (message.content.startsWith(prefix + 'help'))
    channel.send ('**Commands:**\n ===Global Commands===\n >Fail\n >Status\n >Abooses\n >Trig\n >MeaningOfLife\n >Embeds\n ===Sinbadx Knights===\n >Spreadsheet\n >Xena\n >Sinbadx'+
    '\n >Umi\n >Willy\n >Dreams\n >Warm\n >Pixel\n >XenaCorrupt\n ===iXPLODE Commands===\n Coming Soon!');

  else if (message.content.startsWith(prefix + 'Spreadsheet'))
    channel.send ('The spreadsheet can be found at this site: https://docs.google.com/spreadsheets/d/18HlGT-Ys2Z5mFTD18QZeFgnVQunf1LqT5VxnddDnbuw/edit?usp=sharing ');

  else if (message.content.startsWith(prefix +'status'))
    try{
      let bad = new Discord.RichEmbed();
      let myavatar = client.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://images-ext-1.discordapp.net/.eJwFwW0OwiAMANC7cABavgZdYjxLLUyX6EYA92PGu--9n_q2t5rVa4zaZwDJm85rl71lrlXL_gE-eHDr4Eya0BGhjc4FStFDoMUbEhaPjyRIJTKXYHMwU0Qk0nV73vt6lptFn9T_AohLIRY.DAP1B8BhF5M5YeVpwoK2kW_ov0c`;
      bad.setColor(message.member&&message.member.displayColor?message.member.displayColor:1290103);
      bad.setAuthor(client.user.username, client.user.avatarURL);
      bad.setTitle('Bot Status').setDescription('Working');
      bad.addField('System Status: ','**__All systems functioning properly__**');
      bad.addField('CPU Usage:', `${process.cpuUsage().user}`)
         .addField('Packet Time: ',`\`${Date.now() - message.createdTimestamp} ms\``)
         .addField('Uptime: ',`\`${process.uptime()} seconds\``)
         .addField('Avatar URL: ',`[click](myavatar)`)
         .addField('Timestamp: ',new Date().toUTCString());
      bad.setThumbnail(myavatar);
      bad.setFooter(`Bot status`, myavatar);

      return channel.send(' ',{embed: bad});
    }catch(err){
      console.error('[CMD][Status][Err]: '+err);
  }
  else if(message.content.startsWith(prefix + 's')){
    if(message.author.id == Constants.users.JOSH || message.author.id == Constants.users.WILLY){
      channel.send(message.content.split(' ').slice(1).join(' '));
      message.delete();
  }
  }
});

client.login(process.env.TOKEN);
