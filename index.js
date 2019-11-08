const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQxNzQ4MDc3NDY3OTI2NTI5.XcSj-A.-xkywu5msfPAi1hD4DqNmRZC-Vs';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content ===  "Sabba ti voglio bene!"){
        msg.reply('Non è vero, sei uno yasuo main!');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO FROCI"){
        msg.reply('Zitto cancer!');
    }
})

bot.login(token);