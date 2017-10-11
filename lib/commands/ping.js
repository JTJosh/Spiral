'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building ping.js');

exports.name = 'ping';

exports.exec = async (msg, { send }) => {
  let now = Date.now();
  let sentmsg;
  try {
    sentmsg = await send(`:ping_pong: Pong! <@${msg.author.id}>.`);
  } catch (err) {
    console.debug.error(`Error at sending message of Ping: ${err}`);
    return send(`Something's wrong…`).catch(_=>_);
  }
  let sendMetrics = Date.now() - now;
  sentmsg.edit(`:ping_pong: Pong! (${sendMetrics} ms), <@${msg.author.id}>.`);
};
