//var express = require('express');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

// app.listen(3000, function(){
//     console.log("App Server is Started")
// })

app.use(bodyParser.json())

let user = {
    firstName: "Gaurav",
    lastName: "Garg"
}

app.get("/", function(req, res){
    console.log(user)
    res.send(user)
})


app.post("/", function(req, res){
    console.log(req.body)
    res.send(req.body)
})

app.put("/", function(req, res){
    console.log(req.body)
    res.send(req.body)
})

app.delete("/", function(req, res){
    console.log("Delete Method Called")
    res.send("Delete Method Called")
})


app.get("/about-us", (req, res) => {
    console.log("About us")
    res.send("About us 123456")
})

app.listen(3000,  () =>{
    console.log("App server is started")
})