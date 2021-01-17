const Discord = require('discord.js');
const fs = require('fs');

module.exports= {
    name: 'stop',
    description: "Leaves the discord channel",
    usage: "!stop\n\n",
     execute(message, args){
         const voiceChannel = message.member.voice.channel;

         if(!voiceChannel) return message.channel.send('You must be in the same room with BupperBot to use this command.');
         message.channel.send('Woof! I\'ll be leaving now!')
         voiceChannel.leave();
    }
}
