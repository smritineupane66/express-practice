// const express = require("express")

// const app = express();
// const port = 3000;

app.get("/hi",(req,res)=>{
    res.send("Hello World!");
})


app.post("/hi",(req,res)=>{
    res.send("Hello World!");
})
app.listen(port,()=>{
    console.log(`server is listening at local host ${port}`);
    
})



// This code shows a minimal "HelloWorld" Express web application
// . This imports the "express" module using require() and uses
//  it to create a server (app) that listens for HTTP requests on 
//  port 3000 and prints a message to the console explaining what
//   browser URL you can use to test the server. The app.get()
//    function only responds to HTTP GET requests with the
//     specified URL path ('/'), in this case by calling a 
//     function to send our Hello World! message.




// This METHOD can be applied to any one of the
//  HTTP verbs – get, set, put, delete. 
//  An alternate method also exists, which executes
//   independent of the request type




// const express = require("express")

// const app = express();
// const port = 3000;

app.get("/hi",(req,res)=>{
    res.send("Hello World!");
})


app.post("/hi",(req,res)=>{
    res.send("Hello World!");
})

app.all('/test',(req,res)=>{
    res.send("hi smriti")
})
app.listen(port,()=>{
    console.log(`server is listening at local host ${port}`);
    
})


// This method is generally used for defining 
// middleware, which we'll discuss in the middleware 
// chapter.



