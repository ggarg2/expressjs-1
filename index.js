const express = require('express');
const app = express();
const bodyParser = require('body-parser')




const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/laradb1');


app.use(bodyParser.json())

const Cat = mongoose.model('Cat', { name: String }, 'Dogs');
const Dog = mongoose.model('Dog', { name: String, breed: String }, 'Dogs');

// const kitty = new Cat({ name: 'Zildjian' });
// const spike = new Dog({ name: 'Spike', breed: 'Bull Dog'})

// kitty.save().then(() => console.log('meow'));
// spike.save().then((dog)=>{console.log("Bow Bow ", dog)})


app.post('/dog', (req, res, next) => {
    new Dog(req.body).save().then(
       (newDog) => {
           res.send({data : newDog})
       } 
    ).catch(
        (error) => {
            res.status(500).send("Some Error")
        }
    )
})

app.get('/dog', (req, res, next) => {
    Dog.find((error, response) => {
        res.send(response)
    })
})

app.get('/dog/:id', (req, res, next) => {
    Dog.findById(req.params.id, 
        (error, data) => {
            // data.name = "Test Case"
            // Dog.update({_id: data._id}, data, (error, data1)=>{
            //     res.send(data1)
            // })
            res.send(data);
        }
    )
})

app.delete('/dog/:id', (req, res, next) => {
    Dog.findByIdAndRemove(req.params.id, 
        (error, data) => {
            res.send(data);
        }
    )

})

app.put('/dog', (req, res, next) => {
    console.log("Inside put methods ",  req.body)
   Dog.findByIdAndUpdate(req.body._id, req.body, { upsert : true},
    (error, data) => {
            console.log(error)
            res.send(data)
        }
    )
})

app.put('/dog1', (req, res, next) => {
    console.log("Inside put methods ",  req.body)
   Dog.updateOne({_id : req.body._id}, req.body, { upsert : true},
    (error, data) => {
            console.log(error)
            res.send(data)
        }
    )
})




app.listen(3000, ()=>{
    console.log("Application server is started")
})