'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building meaningoflife.js');

exports.name = 'meaningoflife';

exports.exec = async (msg, {send}) => 
  await send('**42.**')
;
