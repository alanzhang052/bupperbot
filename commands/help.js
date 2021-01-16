const fs = require('fs');

module.exports= {
    name: 'help',
    description: "Description: Sends a proper usage log to the chat",
    usage: "Usage: !help\n\n",
     execute(message, args){
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        let result = commandFiles.forEach((file, i) => {
            let props = require(`./${file}`);
            var namelist = props.name;
            var desclist = props.description;
            var usage = props.usage;

            // send help text
            message.channel.send(`**${namelist}** \n${desclist} \n${usage}`);
        });

    }
}
