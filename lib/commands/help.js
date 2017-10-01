'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building help.js');

exports.name = 'help';

exports.exec = async (msg, {send, Discord, client, member, prefix}) =>{
  let embed = new Discord.RichEmbed();
  let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
  embed.setColor(member&&member.displayColor?member.displayColor:16770215);
  embed.setAuthor(client.user.tag, myavatar);
  embed.setTitle('Commands').setDescription(`Phoenix's ~~small~~ large arsenal of commands are at your disposal, for fun.`);
  [
    ['MeaningOfLife',`No required permission.`],
    ['Triggered',`No required permission.`],
    ['Dreams',`No required permission.`],
    // complete this yourself
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Page 1`);
  await send({embed});
  embed = new Discord.RichEmbed;
  embed.setColor(member&&member.displayColor?member.displayColor:16770215);
  embed.setAuthor(client.user.username, myavatar);
  embed.setTitle('**Moderation Commands**').setDescription('You can use these to bring justice!');
  [
    ['Ban','Requires permission: *"KICK_MEMBERS"* with value being *"0x00000002"*!'],
    ['Kick','Requires permission: *"BAN_MEMBERS"* with value being *"0x00000003"*!'],
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Page 2`);
  return await send({embed});
};
