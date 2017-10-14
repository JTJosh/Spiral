'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building avatar.js');

exports.name = 'avatar';

exports.exec = async (msg, {send, guild, Discord, member, args, content, client, author}) =>{
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

  let embed = new Discord.RichEmbed();
  let myauthor = msg.author.displayAvatarURL.replace(/\.webp/,'.jpg');
    embed.setColor(member&&member.displayColor?member.displayColor:0xFFFFFF);
    embed.setTitle(`${targetUser.tag}'s Avatar:`).setDescription(`[Click](${targetUser.displayAvatarURL})`);
    embed.setImage(`${targetUser.displayAvatarURL}`);
    embed.setFooter(`Requested by ${author.tag} | Avatar`, myauthor);

    return await send({embed});
  };
