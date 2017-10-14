'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('[Debug] Preparing ready.js');
exports.default = (client) =>
  client.on("ready", ()=>{
    client.user.setGame(`with ${client.users.size} users! | >help for help`);
    console.log(`Client ready, logged in as ${client.user.tag}:${client.user.id}`);
  })
;
