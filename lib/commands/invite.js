'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building invite.js');

exports.name = 'invite';

exports.exec = async (msg, {send}) => {
  let myinvite = `https://discordapp.com/oauth2/authorize?client_id=348724305271586836&scope=bot&permissions=0`;
  await send('If you want to invite me to your guild, here is your chance.\n' + myinvite);
};
