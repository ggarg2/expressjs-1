const express = require('express');
const app = express();
const router = require("./routes/index.routes")
const mongoDb = require("./config/mongodb.config")
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.use(router);

app.listen(3000,  () =>{
    console.log("App server is started")
})