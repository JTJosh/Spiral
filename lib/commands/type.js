'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building type.js');

exports.name = 'type';

exports.exec = async (msg, {send, guild, Discord, member, args, content, channel}) =>{
  if (args[0] === "start") {
    channel.startTyping();
  } else if (args[0] === "stop") {
    channel.stopTyping();
  } else
  return send(`I don't recognize that command.`)
};
