const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '%help') {
    msg.reply('This is the only command I have! Please wait for next update!');
  }
});

client.on('message', msg => {
  if (msg.content === '%oof') {
    msg.reply('big oof!');
  }
});
//IT HAS TO BE LIKE THIS
client.login('NzA3MzczNDQzNTI3NDc1MjQw.XrH3aA.bMGZA9g50e81aL-3KLS8Y4-LlCw');
