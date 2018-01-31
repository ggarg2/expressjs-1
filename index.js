const express = require('express');
const app = express();

app.use("/user/:id", (req, res, next) =>{
    console.log("Inside User Id")
    console.log("Request Method is ", req.method)
    console.log("Request Params is ", req.params)
    //res.send("User Method Executed")
    next()
}, (req, res, next) => {
    console.log("Inside user/:id 2")
    //res.end()
    //res.send("Hello World")
    next();
})

app.get("/user/:id", (req, res, next) => {
    console.log("/user/:id 3-1")
    if(req.params.id == '0'){
        next('route')
    }else{
        next()
    }
    //res.send("Hello World 1") 
}, (req, res, next) => {
    console.log("/user/:id 3-2")
    next()    
}, (req, res, next) => {
    console.log("/user/:id 3-3")
    next()    
}, (req, res, next) => {
    console.log("/user/:id 3-4")
    next()    
})

app.get("/user/:id", (req, res, next) => {
    console.log("/user/:id 4")
    //res.send("Hello World 1")
    next()
})
app.get("/user/:id", (req, res, next) => {
    console.log("/user/:id 5")
    res.send("Hello World 2")
})

// app.use("/*", (req, res, next) =>{
//     console.log("Inside User Id")
//     console.log("Request Method is ", req.method)
//     console.log("Request Params is ", req.params)
//     next()
    
//     //res.send("User Method Executed")
// })


app.use((req, res, next)=>{
    console.log("First Middleware")
    next()
})

app.get("/*", (req,res,next) => {
    console.log("Second Middleware")
    next()
})


app.route("/")
.get((req, res, next)=>{
    console.log("Get method is called")
    res.send("Get method is called");
}).post((req, res, next)=>{
    console.log("Post method is called")
    res.send("Post method called");
})



app.listen(3000, ()=>{
    console.log("Application server is started")
})