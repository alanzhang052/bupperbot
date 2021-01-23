const Discord = require('discord.js');

module.exports= {
    name: 'stop',
    description: 'Leaves the discord channel it was in',
    usage: '!stop or !leave',
     execute(message, args){
         const voiceChannel = message.member.voice.channel;

         if(!voiceChannel) return message.channel.send('You must be in the same room with BupperBot to use this command.');
         message.channel.send('Finished playing current queue!');
         voiceChannel.leave();
    }
}
