'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building info.js');

exports.name = 'info';

exports.exec = async (msg, {send, reply, channel, guild, client, bot, Discord, member, args}) =>{
  let user = msg.content.split(/\s+/g)

  let id
  if(user[2] != null){
    if(user[2].length == 18)
      id = user[2]
  } else {
  msg.mentions.users.first().id
  }

  let nick = msg.guild.members.get(id).nickname
  if(nick == null) {
  nick = msg.guild.members.get(id).username
  }


  let embed = new Discord.RichEmbed();
  if (msg.content.endsWith(" server"))
  embed.setColor(member&&member.displayColor?member.displayColor:1290103);
  embed.setTitle(`${msg.guild.name}`).setDescription(`Created on ${msg.guild.createdAt}`);
  embed.addField('Owner ',`${msg.guild.owner}`);
  embed.addField('Member Count ', `${msg.guild.memberCount}`);
  embed.addField('Location ',`${msg.guild.region}`);
  embed.addField('Verification Level ',`${msg.guild.verificationLevel}`);
  embed.setThumbnail(`${msg.guild.iconURL}`);
  embed.setFooter(`Guild ID:${msg.guild.id}`);
} else {
  return send("I do not recognize that command.")
}

  embed = new Discord.RichEmbed();
  if (msg.content.endsWith(" user"))
  embed.setColor(member&&member.displayColor?member.displayColor:1290103);
  embed.setTitle(`${msg.guild.members.get(id).username}`).setDescription(nick);
  embed.addField(`Account Creation`,`${msg.guild.members.get(id).createdAt}`);
  embed.addField(`Joined ${msg.guild.name}`,`${msg.guild.members.get(id).joinedAt}`);
  embed.addField(`Highest Role`,`${msg.guild.members.get(id).highestRole}`);
  embed.addField(`Status`, `${msg.guild.members.get(id).presence.status}`);
  embed.addField(`Currently Playing`,`${msg.guild.members.get(id).presence.game.name}`);
  embed.setThumbnail(`${msg.guild.members.get(id).user.avatarURL}`);
} else {
  return send("I do not recognize that command.")
}
  return await send({embed});
};
