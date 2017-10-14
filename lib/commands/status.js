'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building status.js');

exports.name = 'status';

exports.exec = async (msg, {send, Discord, client, member, author}) =>{
  let myauthor = msg.author.displayAvatarURL.replace(/\.webp/,'.jpg');
  let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');

  let embed = new Discord.RichEmbed();
  embed.setColor(member&&member.displayColor?member.displayColor:0xFFFFFF);
  embed.setAuthor(client.user.tag, myavatar);
  embed.setTitle('Spiral Statistics')
  embed.addField('Total Users:',`\`${client.users.size}\``);
  embed.addField('Total Channels:',`\`${client.channels.size}\``);
  embed.addField('Total Servers:',`\`${client.guilds.size}\``)
  embed.addField('Msgs per second:', `\`${client.msgStats.count/process.uptime()}\``);
  embed.addField('Uptime:',`\`${process.uptime()} seconds\``);
  embed.addField('Packet Time:',`\`${Date.now() - msg.createdTimestamp} ms\``);
  embed.addField('Timestamp:',new Date().toUTCString());
  embed.setFooter(`Requested by ${author.tag} | Bot Status`, myauthor);

  return await send({embed});
};
