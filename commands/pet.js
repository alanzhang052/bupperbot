const Discord = require('discord.js');

module.exports = {
    name: 'pet',
    description: "Pet a person you tag",
    usage: "!pet [Target Username]",
     execute(message, args){
        if (!message.mentions.users.size || message.mentions.users.size > 1) {
            return message.reply('Please tag the user you want to pet.');
        }

        const taggedUser = message.mentions.users.first();
        var self = message.member.user.id;

        var gifs = [
            "https://media.tenor.com/images/415e95652ec2a4de4c83ffe9d5d82418/tenor.gif",
            "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPApXTg_uam4OiGOBAvowosDbJMctdIOF6r_zmImYJt30I",
            "https://data.whicdn.com/images/348923468/original.gif",
            "https://media.tenor.com/images/b76ecb7e70d445e5bea70e972904be75/tenor.gif",
            "https://media.tenor.com/images/df552d460f3a9b86e0701c8c8b8e0d5a/tenor.gif",
            "https://media2.giphy.com/media/l0ExvA6hnrdzQ5zoI/giphy.gif",
            "https://media1.tenor.com/images/756202e9c62b42599080f50f76bc8a88/tenor.gif?itemid=14614095",
            "https://media.tenor.com/images/a17d1246857e51f6aa2c14bfd36c9929/tenor.gif",
            "https://media.giphy.com/media/UIIyMCABbnUAg/giphy.gif"
        ];

        var randOf = list => list[Math.floor(Math.random() * list.length)];


        if (taggedUser == self) {
            message.channel.send("Kinda weirdChamp petting yourself but alright");
            const embed = new Discord.MessageEmbed()
                .setImage(url=randOf(gifs));
            message.channel.send(embed);
        } else {
            message.channel.send("<@"+ `${self}` + "> has been pet by <@" + `${taggedUser.id}`+">");
            const embed = new Discord.MessageEmbed()
                .setImage(url=randOf(gifs));
            message.channel.send(embed);
        }
    }
}
