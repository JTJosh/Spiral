'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building infoserver.js');

exports.name = 'info';

exports.exec = async (msg, {send, reply, channel, guild, client, bot, Discord, member}) =>{
  let embed = new Discord.RichEmbed();
  if (msg.content.endsWith("server")) {
  embed.setColor(member&&member.displayColor?member.displayColor:1290103);
  embed.setTitle(`${msg.guild.name}`).setDescription(`Created on ${msg.guild.createdAt}`);
  embed.addField('Owner ',`${msg.guild.owner}`);
  embed.addField('Member Count ', `${msg.guild.memberCount}`);
  embed.addField('Location ',`${msg.guild.region}`);
  embed.addField('Verification Level ',`${msg.guild.verificationLevel}`);
  embed.setThumbnail(`${msg.guild.iconURL}`);
  embed.setFooter(`Guild ID:${msg.guild.id}`);
} else {
  return await send("Are you sure this is a command?")
}
  return await send('',{embed});
};
