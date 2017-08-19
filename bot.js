
/* eslint linebreak-style: "off" */
const Discord = require("discord.js");
const client = new Discord.Client();
const Constants = require('./lib/dependencies/Constants');
client.on("debug", console.log);
client.on("ready", () => {
  client.user.setGame(`>help for help.`);
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
  const prefix = Constants.prefix;
  const channel = message.channel;

  if (message.content.startsWith(prefix + 'Help'))
    channel.send ('```;Fun\n;Moderation(Coming Soon!)```');

  else if (message.content.startsWith(prefix + 'MeaningOfLife'))
    message.reply('**42.**');

  else if (message.content.startsWith(prefix + 'Fail'))
    message.reply('*You have failed everything!*');

  else if (message.content.startsWith(prefix + 'Trig&BAN'))
    channel.send('**TRIGGERED! BAN!!!** https://giphy.com/gifs/hammer-super-mario-8-bit-qPD4yGsrc0pdm');

  else if (message.content.startsWith(prefix + 'Hi'))
    channel.send('Hoi!');

  else if (message.content.startsWith(prefix + 'Dreams'))
    channel.send('Dreams will come true, just wait and see.');

  else if (message.content.startsWith(prefix + 'Willy'))
    channel.send('Co-owner of Vanilla. Special thanks.');

  else if (message.content.startsWith(prefix + 'Fail'))
    channel.send('*You Failed!*');

  else if (message.content.startsWith(prefix + `Warms`))
    channel.send(`*Boils to 1 million degrees, whoops.*`);

  else if (message.content.startsWith(prefix + 'Abooses'))
    channel.send('*Abooses*');

  else if (message.content.startsWith(prefix + 'FakeBan'))
    message.reply('*User banned successfully!*');

  else if (message.content.startsWith(prefix + 'Spreadsheet'))
    channel.send ('The spreadsheet can be found at this site: https://docs.google.com/spreadsheets/d/18HlGT-Ys2Z5mFTD18QZeFgnVQunf1LqT5VxnddDnbuw/edit?usp=sharing ');

  else if (message.content.startsWith(prefix + 'Embeds'))
    channel.send('If you want embed magic without selfbot Download the app here: https://gitlab.com/garantiertnicht/DiscordEmbed/tags/0.5.2-rc  Make sure you have Java, if you have not, download here: www.java.com  Insert your credentials (Username and Password). Do not put in your token, only username and password. Have fun with the embeds ;)');

  else if (message.content.startsWith(prefix + 'Status'))
    try{
      let bad = new Discord.RichEmbed();
      let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
      bad.setColor(message.member&&message.member.displayColor?message.member.displayColor:1290103);
      bad.setAuthor(client.user.username, client.user.avatarURL);
      bad.setTitle('Bot Status').setDescription('Working');
      bad.addField('System Status: ','**__All systems functioning properly__**');
      bad.addField('Total Users: ',`\`${client.users.size}\``);
      bad.addField('Uptime: ',`\`${process.uptime()} seconds\``)
      bad.addField('Packet Time: ',`\`${Date.now() - message.createdTimestamp} ms\``)
      bad.addField('Avatar URL: ',`[click](myavatar)`)
      bad.addField('Timestamp: ',new Date().toUTCString());
      bad.setThumbnail(myavatar);
      bad.setFooter(`Bot status`, myavatar);

      return channel.send(' ',{embed: bad});
    }catch(err){
      console.error('[CMD][Status][Err]: '+err);
  }
  else if (message.content.startsWith(prefix + 'Fun'))
    try{
      let bad = new Discord.RichEmbed();
      let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
      bad.setColor(message.member&&message.member.displayColor?message.member.displayColor:1290103);
      bad.setAuthor(client.user.username, client.user.avatarURL);
      bad.setTitle('Fun Commands').setDescription('Commands you can use on the go to have a laugh. :)');
      bad.addField(';MeaningOfLife','Gives you the meaning of life.')
      bad.addField(';Trig','TRIGGERED!')
      bad.addField(';Hi','Hi!')
      bad.addField(';Dreams','Follow your dreams!')
      bad.addField(';Fail','Failure!')
      bad.addField(';Warms','It is getting hot in here.')
      bad.addField(';Abooses','Why abuse me?')
      bad.addField(';Embeds','Without a selfbot!')
      bad.addField(';FakeBan','Work In Progress.')
      bad.setFooter(`Section: Fun`);

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
  if (command === "Eval") {
    if(message.author.id !== " ") return;
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("x1", clean(evaled));
    } catch(err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
    }
  }

}); // END MESSAGE HANDLER

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.defaultChannel.send(`"${member.user.username}" has joined this server`);
});

client.login(process.env.TOKEN);
