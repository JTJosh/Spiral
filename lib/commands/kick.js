'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building kick.js');

exports.name = 'kick';

exports.exec = async (msg, {send, guild, Discord, member, args, content}) =>{
  let id = member.id;
  if(msg.mentions.users.first())
    id = msg.mentions.users.first().id;
  else if(args[1]){
    for(const [i,m] of guild.members) {
      const q = content.substring(content.indexOf(args[1]));
      {
        id = i;
        break;
      }
    }
  }
  let targetMember = guild.members.get(id);

  if(!id||!targetMember) return await send('Please ensure you have specified a valid member!');

  let targetUser = targetMember.user;


};
