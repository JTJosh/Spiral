'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building hi.js');

exports.name = 'Hi';

exports.exec = async (msg, {send}) =>
  send('Hoi')
;
