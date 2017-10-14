'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building help.js');

exports.name = 'help';

exports.exec = async (msg, {send, Discord, client, member, prefix, author}) =>{

  let myauthor = msg.author.displayAvatarURL.replace(/\.webp/,'.jpg');
  let myavatar = client.user.displayAvatarURL.replace(/\.webp/,'.jpg');

  let embed = new Discord.RichEmbed();
  embed.setColor(member&&member.displayColor?member.displayColor:0xFFFFFF);
  embed.setAuthor(client.user.tag, myavatar);
  embed.setTitle('Help:').setDescription(`Sprinkles' help page.`);
  embed.addField('Fun:','`8ball`, `Banned`, `Dreams`, `Warm`.');
  embed.addField('Moderation:','`Ban`, `Kick`, `Mute`, `Clear`.');
  embed.addField('Utility:','`Ping`, `Info user`, `Info Server`.');
  embed.addField('Miscellaneous:','`Status`, `Willy`.');
  embed.setThumbnail(myavatar);
  embed.setFooter(`Requested by ${author.tag} | Help`, myauthor);

  return await send({embed});
};
/*
  embed = new Discord.RichEmbed;
  embed.setColor(member&&member.displayColor?member.displayColor:16770215);
  embed.setAuthor(client.user.username, myavatar);
  embed.setTitle('**Moderation**').setDescription('You can use these to bring justice!');
  [
    ['Ban','Work in progress!'],
    ['Kick','Work in progress!'],
    ['Mute','Work in progress!'],
    ['Clear','Work in progress!'],
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Page 2`);
  await send({embed});
  embed = new Discord.RichEmbed;
  embed.setColor(member&&member.displayColor?member.displayColor:16770215);
  embed.setAuthor(client.user.username, myavatar);
  embed.setTitle('**Utility**').setDescription('Useful!');
  [
    ['Status','Stats of this bot!'],
    ['Invite','Invite our bot!'],
    ['Ping',`Sure it's not Discord?`],
    ['Info user','Returns the info of a user. (Example: ;info user @Spiral#7864)'],
    ['Info server',`Info for the server you're in.`],
  ].map(e=>[prefix+e[0], e[1], e[2]]).forEach(f=>embed.addField(...f));

  embed.setFooter(`Page 3`);
  return await send({embed});
};
*/
