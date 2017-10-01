'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building 8ball.js');

exports.name = '8ball';

const answers = ["Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Ahaha! Really?!?", "Pfft.", "Sorry, no.", "Hell yes.", "Hell no.", "The answer is unreadable.", "It's uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!"];
exports.exec = async (msg, {send, Discord, client, member}) =>{

  if (msg.content.endsWith("?")) {
    return await send(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`).catch(err => client.funcs.log(err.stack, "error"));
  } else {
    return await send("🎱 That doesn't look like a question, try again please.").catch(err => client.funcs.log(err.stack, "error"));
  }
};
