const Discord = require('discord.js');

const fs = require('fs');

module.exports = {
    name: 'help',
    description: 'Sends a proper usage log to the chat',
    usage: '!help',
     execute(message, args){
        var list = [];

        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        let result = commandFiles.forEach((file, i) => {
            let props = require(`./${file}`);
            var command = {
                name: props.usage,
                value: props.description,
            };

            list.push(command);
        });

        const embed = new Discord.MessageEmbed()
            .setColor('#ffb366')
            .setAuthor('BupperBot Help')
            .setDescription('**Full Command List**. We are still working on a detailed guide, so please be patient! Message me if you have any questions.')
            .addFields(
                list
            )
            .setFooter('Thanks for using BupperBot 🐕')
        message.channel.send(embed)

    }
}
