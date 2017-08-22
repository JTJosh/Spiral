'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('[Debug] Preparing reconnecting.js');
exports.default = client => {
  client.on('reconnecting', ()=>{
    console.log('Client is reconnecting to websocket');
  });
};
