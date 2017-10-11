'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building banned.js');

const triggered = ["https://giphy.com/gifs/hammer-super-mario-8-bit-qPD4yGsrc0pdm", "https://giphy.com/gifs/H99r2HtnYs492", "https://giphy.com/gifs/banned-y1BskGOtz7pnO", "https://giphy.com/gifs/runescape-long-reads-e3WNjAUKGNGoM"]

exports.name = 'banned';

exports.exec = async (msg, {send, Discord, client, member}) =>{
  send(`**TRIGGERED!! BAN!!** ${triggered[Math.floor(Math.random() * triggered.length)]}`).catch(err => client.funcs.log(err.stack, "error"));
};
