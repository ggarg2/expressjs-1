const DogModel = require("../models/dog.model") 

createDog = (req, res, next) => {
    console.log("Hello Create Dog ", req.body)

    new DogModel(req.body).save().then(
        (newDog) => {
            res.send({
                 status: 'Created Successfully',
                 data: newDog
                })
        }
    ).catch(
        (error) => {
            throw error;
        }
    )
}

getDogs = (req, res, next) => {
    DogModel.find().then( (data) => {
        res.send(data)
    })
    .catch((error)=>{
        throw error
    })
}

getDogById = (req, res, next) => {
    DogModel.findById(req.params.id).then(
        (data)=>{
            res.send(data)
        }
    ).catch(
        (error)=> {
            throw error
        }
    )
}

updateDog = (req, res, next) => {
    DogModel.update({_id: req.params.id}, req.body, {upsert: true})
    .then(
        data=> {
            res.send(data)
        }
    )
    .catch(
        error => {
            throw error;
        }
    ) 
}

deleteDog = (req, res, next) => {
    DogModel.findByIdAndRemove(req.params.id)
    .then(
        data => {
            res.send({status: "Dog is deleted", data: data})
        }
    )
    .catch(
        error => {
            throw error;
        }
    )
}

module.exports = {
    createDog, 
    updateDog, 
    getDogById, 
    getDogs, 
    deleteDog
}