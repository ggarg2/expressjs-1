const express = require('express');

const app = express();

const bookRouter = require("./routes/book");

app.use("/book", bookRouter);

app.all("/*", (req, res,next)=>{
    console.log("All Method is called")
    next();
})

let firstEmp = (req, res, next) => {
    console.log("First employee request handler")
    next();
}
let secEmp = (req, res, next) => {
    console.log("Second employee request handler")
    next();
}
let thirdEmp = (req, res, next) => {
    console.log("Third employee request handler")
    res.send("Exit Employee")
}

app.get("/employee", [firstEmp, secEmp, thirdEmp])

app.get("/user/:id(\[a-z]+)", (req, res, next)=>{
    console.log("user [a-z] is ", req.params)
    res.send("user [a-z] method is called");
})

app.get("/user/:id(\[0-9]+)", (req, res, next)=>{
    console.log("user [0-9] is ", req.params)
    //res.end()
    res.send("user [0-9] method is called");
})

app.get("/user/:name/id/:id", (req, res, next)=>{
    console.log("username is ", req.params)
    res.send("user parameter method is called");
})

app.get("/distance/between/:a-:b", (req, res, next)=>{
    console.log("distance is ", req.params)
    res.send("distance method is called");
})

app.get("/distance/between/:a.:b", (req, res, next)=>{
    console.log("distance a.:b is ", req.params)
    res.send("distance a.:b method is called");
})

app.get("/*fly$/", (req, res, next)=>{
    console.log("Get /.*fly$/ method is called")
    res.send("Get /.*fly$/ method is called");
})

app.get("/api/", (req, res, next)=>{
    console.log("Get /a/ method is called")
    res.send("Get /a/ method is called");
})

app.get("/a(bcd)?efg", (req, res, next)=>{
    console.log("Get a(bcd)?efg method is called")
    res.send("Get a(bcd)?efg method is called");
})

app.get("/about-us", (req, res, next)=>{
    console.log("Get about-us method is called")
    res.send("Get about-us method is called");
})

app.get("/dashboard.user", (req, res, next)=>{
    res.send("Get dashboard.user method is called");
})

app.get("/abcd/ab?cd/abc", (req, res, next)=>{
    console.log("Get ab?cd method is called")
    res.send("Get ab?cd method is called");
})

app.get("/ab+cd", (req, res, next)=>{
    console.log("Get ab+cd method is called")
    res.send("Get ab+cd method is called");
})



app.get('/ab*cd', function (req, res) {
    console.log("Get ab*cd method is called")
    res.send('Get ab*cd method is called')
})

app.get("/service-worker.js", (req, res, next)=>{
    console.log("Get service worker is called")
    res.send("Get service worker is called");
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