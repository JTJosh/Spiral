'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building warm.js');

exports.name = 'warm';

exports.exec = async (msg, {send}) =>
  send('*Boils to 1 million degrees, whoops.*')
;
