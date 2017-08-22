'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('[Debug] Preparing message.js');
exports.default = (client, prefix, msgStats) => {
  const theprefix = client.prefix||prefix;
  client.on('message', m=>{
    msgStats.count++;
    if(m.author.bot)return;

    if(m.content.substring(0,theprefix.length)!==theprefix) return false;//console.log('nothing');

    client.CommandHandler.handle(m, theprefix);
  });
};
