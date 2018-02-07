const express = require('express');
const app = express();
const router = require("./routes/index.routes")
const mongoDb = require("./config/mongodb.config")
const bodyParser = require('body-parser')
const cors = require('cors')
const GlobalError = require('./exception/global.error')
const ErrorHandler = require('./exception/error.handler')
const compression = require('compression')

//https://www.npmjs.com/package/config
//Environment specific configuration
const config = require('config')


const port = config.get("serverConfig.port") || 3000;

//JSON Parsing
app.use(bodyParser.json())

//Form Data Parser, x-www-form-data parser
app.use(bodyParser.urlencoded({ extended: true }));

//Gzip compressing can greatly decrease 
//the size of the response body and 
//hence increase the speed of a web app. 
//Use the compression middleware for 
//gzip compression in your Express app
app.use(compression())

//Cross origin request source
app.use(cors())

//Application routes
app.use(router);

//404 Handler
app.use((req, res, next) => {
    throw new GlobalError("Resource Not Found", 404)
})

//Global Error Handler
app.use(ErrorHandler)

//Start the server
app.listen(port,  () =>{
    console.log("App server is started on port ", port)
})