require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const prefix = '!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Woof! BupperBot is online!');
    client.user.setUsername("BupperBot");
    client.user.setActivity("!help");
});

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'stop' || command === 'leave') {
        client.commands.get('stop').execute(message, args);
    } else {
       message.channel.send('Unrecognized command. Enter $help for proper usage');
    }
});

client.login(process.env.CLIENT_TOKEN);
