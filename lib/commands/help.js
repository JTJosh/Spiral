'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building help.js');

exports.name = 'help';

exports.exec = async (msg, {send, Discord, client, member, prefix}) =>{
  let embed = new Discord.RichEmbed();
  let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
  embed.setColor(member&&member.displayColor?member.displayColor:16770215);
  embed.setAuthor(client.user.tag, myavatar);
  embed.setTitle('Fun Commands').setDescription(`Phoenix's ~~small~~ large arsenal of commands are at your disposal, for fun.`);
  [
    ['MeaningOfLife',`For an insight to life!`],
    ['Banned',`Feel my wrath!`],
    ['Dreams','Believe!']
    ['8ball','It knows every secret...']
    // complete this yourself
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Page 1`);
  await send({embed});
  embed = new Discord.RichEmbed;
  embed.setColor(member&&member.displayColor?member.displayColor:16770215);
  embed.setAuthor(client.user.username, myavatar);
  embed.setTitle('**Moderation Commands**').setDescription('You can use these to bring justice!');
  [
    ['Ban','Work in progress!'],
    ['Kick','Work in progress!'],
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Page 2`);
  return await send({embed});
};
