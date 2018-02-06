const mongoose = require("../config/mongodb.config");

dogSchema = {
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    color: String,
    type: String,
    weight: Number,
    previousOwners: [{ name: String, address: String, phone: Number}],
    img: String
}

//model('Dog', dogSchema, 'Dogs')
//Dog -> Model Name
//dogSchema -> Dog Document
//Dogs -> MongoDB Collection Name

module.exports = mongoose.model('Dog', dogSchema, 'Dogs')