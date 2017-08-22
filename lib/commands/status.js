'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building status.js');

exports.name = 'status';

exports.exec = async (msg, {send, Discord, client, member}) =>{
  let embed = new Discord.RichEmbed();
  let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
  embed.setColor(member&&member.displayColor?member.displayColor:1290103);
  embed.setAuthor(client.user.tag, myavatar);
  embed.setTitle('Bot Status').setDescription('Working');
  embed.addField('System Status: ','**__All systems functioning properly__**');
  embed.addField('Total Users: ',`\`${client.users.size}\``);
  embed.addField('Msgs per second: ', `\`${client.msgStats.count/process.uptime()}\``);
  embed.addField('Uptime: ',`\`${process.uptime()} seconds\``);
  embed.addField('Packet Time: ',`\`${Date.now() - msg.createdTimestamp} ms\``);
  embed.addField('Avatar URL: ',`[click](${myavatar})`);
  embed.addField('Timestamp: ',new Date().toUTCString());
  embed.setThumbnail(myavatar);
  embed.setFooter(`Bot status`, myavatar);

  return await send('',{embed});
};
