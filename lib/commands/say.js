'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building say.js');

exports.name = 's';

exports.exec = async (msg, {send, author, args, content}) =>{
  const Constants = require('../dependencies/Constants');
  const sayMessage = args.join(" ");

if (author.id == Constants.users.JOSH || author.id == Constants.users.WILLY){
  msg.delete().catch(O_o=>{});
  await send(sayMessage);
} else {
  return await send("You are not authorized to use this!");
}
};
