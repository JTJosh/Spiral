'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building info.js');

const _ = require('lodash');

exports.name = 'info';

exports.exec = async (msg, {send, guild, Discord, member, args, content, client, author}) =>{
  if(!guild) return send('You must use this command in a server!');
  let id = member.id;
  if(msg.mentions.users.first())
    id = msg.mentions.users.first().id;
  else if(args[1]){
    for(const [i,m] of guild.members) {
      const q = content.substring(content.indexOf(args[1]));
      if(
        args[1] === i ||
        new RegExp(_.escapeRegExp(q),'i').test(m.user.username) ||
        new RegExp(_.escapeRegExp(q),'i').test(m.user.tag) ||
        new RegExp(_.escapeRegExp(q),'i').test(m.displayName)
      ){
        id = i;
        break;
      }
    }
  }
  let targetMember = guild.members.get(id);

  if(!id||!targetMember) return await send('Please ensure you have specified a valid member!');

  let targetUser = targetMember.user;
  let nick = targetMember.displayName;
  let myauthor = msg.author.displayAvatarURL.replace(/\.webp/,'.jpg');
  let verificationinfo = "Lit. XD";
  let verificationLevel = guild.verificationLevel;
  let avatar = targetUser.displayAvatarURL.replace(/\.webp/,'.jpg');

  if (guild.verificationLevel = 0) {
    verificationinfo = 'No restrictions enabled.';
  } else if (guild.verificationLevel = 1) {
    verificationinfo = 'This means members need a verified email.';
  } else if (guild.verificationLevel = 2) {
    verificationinfo = 'This means members need to have a registered Discord account for 5 minutes. Also, they require a verified email.';
  } else if (guild.verificationLevel = 3) {
    verificationinfo = 'This means members need to be members of the server for 10 minutes and have to have a registered Discord account for 5 minutes. Also, they require a verified email.';
  } else if (guild.verificationLevel = 4)
    verificationinfo = 'This means members need to have a verified phone connected to their Discord account. They need to be members of the server for 10 minutes and have to have a registered Discord account for 5 minutes. Also, they require a verified email.';


  let embed = new Discord.RichEmbed();
  if (args[0] === "server") {
    embed.setColor(member&&member.displayColor?member.displayColor:0xFFFFFF);
    embed.setTitle(`${guild.name}`).setDescription(`Guild ID: ${guild.id}`);
    embed.addField('Server Owner:', `${guild.owner}`);
    embed.addField('Creation Date:',`Created at ${guild.createdAt.toUTCString()}`);
    embed.addField('Member Count:', `${guild.memberCount}`);
    embed.addField('Channel Count', `${guild.channels.size}`);
    embed.addField('AFK Channel:', `${guild.afkChannel}`);
    embed.addField('AFK Timeout: ', `${guild.afkTimeout} seconds`);
    embed.addField('Location', `${guild.region}`);
    embed.addField('Verification Level: ' + verificationLevel, verificationinfo);
    embed.addField(`Icon Link`, `[Click](${guild.iconURL})`);
    embed.setThumbnail(`${guild.iconURL}`);
    embed.setFooter(`Requested by ${author.tag} | Info Server`, myauthor);
  } else if (args[0]==="user") {
    embed.setColor(member&&member.displayColor?targetMember.displayColor:0xFFFFFF);
    embed.setAuthor(`${targetUser.tag}`, avatar)
    embed.setTitle(`${targetUser.tag} AKA ${targetMember.displayName}`).setDescription(`User ID: ${targetUser.id}`);
    embed.addField(`Joined Discord:`, targetUser.createdAt.toUTCString());
    embed.addField(`Joined ${guild.name}:`, targetMember.joinedAt.toUTCString());
    embed.addField(`Highest Role:`, targetMember.highestRole);
    embed.addField(`Number of Roles:`, targetMember.roles.size);
    embed.addField(`Status:`, targetMember.presence.status);
    embed.addField(`Colour:`, targetMember.displayHexColor);
    embed.addField(`Currently Playing:`,`${targetUser.presence&&targetUser.presence.game?targetUser.presence.game.name:'No game specified.'}`);
    embed.addField(`Avatar:`,`[Click](${msg.author.displayAvatarURL})`);
    embed.setThumbnail(targetMember.displayAvatar);
    embed.setFooter(`Requested by ${author.tag} | Info User`, myauthor);
  } else
    return send("I do not recognize that sub-command.");

  return await send({embed});
};
