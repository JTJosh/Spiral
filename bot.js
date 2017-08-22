
/* eslint linebreak-style: "off" */
const _ = require('lodash');
const Discord = require("discord.js");
const path = require('path');
const Constants = require('./lib/dependencies/Constants');
const Credentials = require('./lib/dependencies/credentials.json');
const chalk = require('chalk');
chalk.enabled = true;
console.log(chalk.green.bgBlue.underline.bold(`${'\n'.repeat(20)}\n${Constants.name} is booting up! Please wait.\n`));
const msgStats = {
  count: 0,
  maxR: 0.1,
};
const GUI = new (require('./lib/struct/GUI').default)(Constants.name, process.env.TOKEN||Credentials.token, _, msgStats).build();

const client = new (require('./lib/struct/BotClient').default(Discord, _, path))({
  'eventPath': './lib/events',
  'cmdPath': './lib/commands',
  'prefix': Constants.PREFIX||'>',
  msgStats,
});

client.GUI = GUI;

client.build().login(process.env.TOKEN||Credentials.token);

/*


  else if (message.content.startsWith(prefix + 'Embeds'))
    channel.send('If you want embed magic without selfbot Download the app here: https://gitlab.com/garantiertnicht/DiscordEmbed/tags/0.5.2-rc  Make sure you have Java, if you have not, download here: www.java.com  Insert your credentials (Username and Password). Do not put in your token, only username and password. Have fun with the embeds ;)');

  else if (message.content.startsWith(prefix + `FakeBan  ${message.mentions.users}`))
    channel.send(`${message.mentions.users} was banned successfully!`);



  else if (message.content.startsWith(prefix + 'Fun'))
    try{
      let bad = new Discord.RichEmbed();
      let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
      bad.setColor(message.member&&message.member.displayColor?message.member.displayColor:1290103);
      bad.setAuthor(client.user.username, client.user.avatarURL);
      bad.setTitle('Fun Commands').setDescription('Commands you can use on the go to have a laugh. :)');
      bad.addField(';MeaningOfLife','Gives you the meaning of life.')
      bad.addField(';Trig&BAN','TRIGGERED!')
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
  else if (message.content.startsWith(prefix + 'Moderation'))
    try{
      let bad = new Discord.RichEmbed();
      let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
      bad.setColor(message.member&&message.member.displayColor?message.member.displayColor:1290103);
      bad.setAuthor(client.user.username, client.user.avatarURL);
      bad.setTitle('**Moderation Commands**').setDescription('You can use these to bring justice!');
      bad.addField(';Ban','Bans a selected member.')
      bad.addField(';Kick','Kicks a selected member.')
      bad.setFooter(`Section: Moderation`);

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
  if (message.content.startsWith(prefix + "Kick")) {
    let modRole = message.guild.roles.find("name", "Staff");
    if(!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to perform this command!");
    }
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to kick!");
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
      return message.reply("That user does not seem valid!");
    }
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return message.reply("I dont have the permission: 'KICK_MEMBERS'!");
    }
    kickMember.kick();
    message.reply('User has been kicked successfully!')
  }

  if (message.content.startsWith(prefix + "Eval")) {
    if(message.author.id !== "292971521159200768") return;
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
if (message.content.startsWith(prefix + "Ban")) {
  let modRole = message.guild.roles.find("name", "Staff");
  if(!message.member.roles.has(modRole.id)) {
    return message.reply("You do not have the permission to perform this command!");
  }
  if(message.mentions.users.size === 0) {
    return message.reply("Please mention a user to ban!");
  }
  let banMember = message.guild.member(message.mentions.users.first());
  if(!banMember) {
    return message.reply("That user does not seem valid!");
  }
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
    return message.reply("I dont have the permission: 'BAN_MEMBERS'!");
  }
  banMember.ban();
  message.reply('User has been banned successfully!')
}

}); // END MESSAGE HANDLER

*/ //client.build().login(process.env.TOKEN);
