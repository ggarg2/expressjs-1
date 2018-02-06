const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/laradb1');

let mongoDb = mongoose.connection

mongoDb.on('error', (error)=> {
    console.log("Error while starting MongoDB")
})

mongoDb.once('open', ()=>{
    console.log("Connection is established")
})

module.exports = mongoose;