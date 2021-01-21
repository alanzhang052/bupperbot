require('dotenv').config();
const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports= {
    name: 'dbfunction',
    description: "Function that requires connection to DB",
    usage: "!dbfunction",
     async execute(message, args){
         try {
             await client.connect();
             console.log('Client connected to MongoDB!');

         } catch(e) {
             console.error(e);
         } finally {
             await client.close();
         }
    }
}
