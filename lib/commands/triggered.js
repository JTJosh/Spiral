'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building triggered.js');

exports.name = 'triggered';

exports.exec = async (msg, {send, Discord, client, member}) =>{
  send('**TRIGGERED!!** https://giphy.com/gifs/banned-y1BskGOtz7pnO');
};
