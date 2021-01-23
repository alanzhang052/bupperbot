const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

module.exports= {
    name: 'urban',
    description: 'Returns the definition of a word/phrase in UrbanDictionary',
    usage: '!urban [Word/Phrase]',
     async execute(message, args){
         if (!args.length) {
             return message.reply('Please enter a term to search!');
         }

         const query = querystring.stringify({term: args.join(' ')});

         const {list} = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
         if (!list.length) {
             return message.reply('No results found!');
         }

         const phrase = list[0];

         const embed = new Discord.MessageEmbed()
             .setColor('#ffb366')
             .setTitle('UrbanDictionary Definition for ' + phrase.word)
             .setURL(phrase.permalink)
             .addFields(
                 { name : 'Definition', value: trim(phrase.definition, 1024) },
                 { name: 'Example', value: trim(phrase.example, 1024) },
		         { name: 'Rating', value: `${phrase.thumbs_up} thumbs up. ${phrase.thumbs_down} thumbs down.` }
             );

        message.channel.send(embed);
     }
}
