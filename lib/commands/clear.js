'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building clear.js');

exports.name = 'clear';

exports.exec = async (msg, {send, reply, channel, guild, args, member, client, bot, Discord }) => {
  const deleteCount = parseInt(args[0], 10);

  if(!deleteCount || deleteCount < 1 || deleteCount > 100)
    return await send("Number is too large or too small to delete.");

  const fetched = await msg.channel.fetchMessages({count: deleteCount});
  msg.channel.bulkDelete(fetched)
    .catch(error => send(`Couldn't delete messages because of: ${error}`));
};
