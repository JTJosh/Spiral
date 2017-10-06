'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building info.js');

const _ = require('lodash');

exports.name = 'info';

exports.exec = async (msg, {send, guild, Discord, member, args, content}) =>{
  if(!guild) return send('You must use this command in a server');
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

  if(!id||!targetMember) return await send('Please ensure you have specified a valid member');

  let targetUser = targetMember.user;
  let nick = targetMember.displayName;

  let embed = new Discord.RichEmbed;

  if (args[0] === "server") {
    embed.setColor(targetMember.displayColor||1290103);
    embed.setTitle(`${guild.name}`).setDescription(`Created on ${guild.createdAt}`);
    embed.addField('Owner ',`${guild.owner}`);
    embed.addField('Member Count ', `${guild.memberCount}`);
    embed.addField('Location ',`${guild.region}`);
    embed.addField('Verification Level ',`${guild.verificationLevel}`);
    embed.setThumbnail(`${guild.iconURL}`);
    embed.setFooter(`Guild ID:${guild.id}`);
  } else if (args[0]==="user") {
    embed.setColor(member&&member.displayColor?member.displayColor:1290103);
    embed.setTitle(`${targetUser.username}`).setDescription(nick);
    embed.addField(`Account Creation`,`${targetUser.createdAt}`);
    embed.addField(`Joined ${guild.name}`,`${targetMember.joinedAt}`);
    embed.addField(`Highest Role`,`${targetMember.highestRole}`);
    embed.addField(`Status`, `${targetUser.presence.status}`);
    embed.addField(`Currently Playing`,`${targetUser.presence&&targetUser.presence.game?targetUser.presence.game.name:'nothing'}`);
    embed.setThumbnail(`${targetUser.displayAvatarURL}`);
  } else
    return send("I do not recognize that sub-command.");

  return await send({embed});
};
