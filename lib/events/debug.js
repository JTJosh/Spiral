'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('[Debug] Preparing debug.js');
exports.default = (client) => {
  client.on("debug", console.log);
};
