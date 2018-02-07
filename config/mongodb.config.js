const config = require('config');
const mongoose = require('mongoose');

//Get the host name from env config
const mongodbHost = config.get('mongodb.host');

console.log("mongodbHost ", mongodbHost)

mongoose.connect(mongodbHost);

let mongoDb = mongoose.connection

mongoDb.on('error', (error)=> {
    console.log("Error while starting MongoDB")
})

mongoDb.once('open', ()=>{
    console.log("Connection is established")
})

module.exports = mongoose;