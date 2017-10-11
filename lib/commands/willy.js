'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building willy.js');

exports.name = 'Willy';

exports.exec = async (msg, {send}) =>
  await send('Author of full bot rewrite. Special thanks.')
;
