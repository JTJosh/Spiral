'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building help.js');

exports.name = 'help';

exports.exec = async (msg, {send, Discord, client, member, prefix}) =>{
  let embed = new Discord.RichEmbed();
  let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');//`https://cdn.discordapp.com/attachments/257895860757725186/322638803426738176/9k.png`;
  embed.setColor(member&&member.displayColor?member.displayColor:1290103);
  embed.setAuthor(client.user.tag, myavatar);
  embed.setTitle('Fun Commands').setDescription('Commands you can use on the go to have a laugh. :)');
  [
    ['MeaningOfLife','Gives you the meaning of life.'],
    ['Trig&BAN','TRIGGERED!'],
    ['Hi','Hi!'],
    ['Dreams','Follow your dreams!'],
    // complete this yourself
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Section: Fun`);
  await send('```\nFun```', {embed});
  embed = new Discord.RichEmbed;
  embed.setColor(member&&member.displayColor?member.displayColor:1290103);
  embed.setAuthor(client.user.username, myavatar);
  embed.setTitle('**Moderation Commands**').setDescription('You can use these to bring justice!');
  [
    ['Ban','Bans a selected member.'],
    ['Kick','Kicks a selected member'],
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Section: Moderation`);
  return await send('```Moderation```',{embed});
};
