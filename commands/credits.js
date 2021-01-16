const fs = require('fs');

module.exports= {
    name: 'credits',
    description: "Description: Gives the developer a chance to flex",
    usage: "Usage: !credits\n\n",
     execute(message, args) {
         message.channel.send('Woof! This bot was developed by Alan!');
    }
}
