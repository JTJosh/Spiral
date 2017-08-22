'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building fail.js');

exports.name = 'fail';

exports.exec = async (msg, {reply}) =>
  await reply('*You have failed everything!*')
;
