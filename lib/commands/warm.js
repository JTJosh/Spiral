'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building warm.js');

exports.name = 'warm';

exports.exec = async (msg, {send, Discord, client, member}) => {
  await send(`${member.user.tag}, *Boils your enemy to 1 million degrees, whoops.*`);
};
