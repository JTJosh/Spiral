'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building status.js');

exports.name = 'shutdown';

exports.exec = async (msg, {send}) =>{
  send('Shutting down...').then(()=>process.exit(1));
};
