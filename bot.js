/* eslint linebreak-style: "off" */
const _ = require('lodash');
const Discord = require("discord.js");
const path = require('path');
const Constants = require('./lib/dependencies/Constants');
const Credentials = require('./lib/dependencies/credentials.json');
const chalk = require('chalk');
chalk.enabled = true;
console.log(chalk.green.bgBlue.underline.bold(`${'\n'.repeat(20)}\n${Constants.name} is booting up! Please wait.\n`));
const msgStats = {
  count: 0,
  maxIR: 0.1,
};
const GUI = new (require('./lib/struct/GUI').default)(Constants.name, process.env.TOKEN||Credentials.token, _, msgStats).build();

const client = new (require('./lib/struct/BotClient').default(Discord, _, path))({
  'eventPath': './lib/events',
  'cmdPath': './lib/commands',
  'prefix': Constants.PREFIX||'>',
  msgStats,
});

client.GUI = GUI;

client.build().login(process.env.TOKEN||Credentials.token);
