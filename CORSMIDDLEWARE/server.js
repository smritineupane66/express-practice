// const express = require("express")


// const cors = require("cors")  //import cors


// const app = express();

app.use(cors({
    // origin:"*"
}))   //enable cors

app.get('/user',(req,res)=>{
    // res.send("hello")

    res.json({
        "name":"HARI",
        "AGE":25
    })
})


app.listen(3000,()=>{
    console.log('server is listening at local host 3000');
    
})


// cors() middleware allows your server to accept requests from any domain or specific domains.
// Without CORS, browsers block cross-origin requests by
//  default.
// Example: With cors(), your React app on https://example.com can 
// make requests to an API running on http://localhost:3000.


// Use res.json() when your response is JSON—it makes your
//  code clearer and sets the appropriate headers.
// Use res.send() for more general-purpose responses
//  (e.g., strings, HTML, etc.), though it works with 
//  objects too.




// Body-parser is a middleware in Express.js used to parse the
//  incoming request bodies before the request
//   reaches your route handler. It helps in handling
//    the data sent in HTTP requests, especially in 
//    POST requests.
// const express = require("express")
// const bodyParser = require("body-parser")

// const app = express();


app.use(bodyParser.json())

// app.use(bodyParser.json()) is telling Express to
//  use body-parser middleware to parse incoming JSON 
//  data from the request body.


app.post('/user',(req,res)=>{
    console.log(req.body);
    res.json(" data recieved  successfully ")

    
})
app.listen(3000,()=>{
    console.log('server is running at port 3000');
    
})




// const express = require("express")

// const bodyparser = require("body-parser")

// express: This is the Express.js framework, which
//  helps create a web server.
// body-parser: This is a middleware that extracts data
//  from request bodies.

// const app = express();


// app.use(bodyparser.json())


// Example: If a client sends this JSON:
// json
// Copy
// Edit
// {
//   "username": "john_doe",
//   "password": "123456"
// }
// The server will automatically convert it into a JavaScript object:
// js
// Copy
// Edit
// { username: "john_doe", password: "123456" }

// app.use(bodyparser.urlencoded({extended:true}))



app.post('/user',(req,res)=>{
    console.log(req.body);

    res.json("message sent successfully")
    
})

app.listen(5000,()=>{
    console.log('server is running at local host 5000');
    
})


// cookie parser 

// cookie-parser is a middleware in Express.js that
//  helps in reading cookies from incoming HTTP requests
//  . It parses the cookie header and makes it 
//  accessible in req.cookies inside your route 
//  handlers.

// 📌 Example of Cookies in Real Life
// 🛒 Online Shopping Cart
// Even if you leave the website, your cart items
//  remain saved because of cookies.

// 🔐 User Authentication (Login Sessions)
// When you log in to a website, cookies store a 
// session ID, so you stay logged in even after
//  refreshing the page.

// Cookies are small pieces of data stored in the user's 
// browser by a website. They help websites remember user 
// information, such as login sessions, preferences, and
//  browsing activity.



// const express = require('express')

// const cookieparser = require("cookie-parser")

// const app = express();
app.use(cookieparser())


app.get("/set",(req,res)=>{
    res.cookie("user","smriti",{maxAge: 1000 * 60 * 60 * 24})
    res.send("cookie has been sent")
})


app.get("/get",(req,res)=>{
    const user = req.cookies.user;
    res.send(user ? `hello ${user}`:"no cookie found")
})


app.listen(5000,()=>{
    console.log("server is listening at local host 5000");
    
})


// session 
// A session is a way for the server to remember information about a user
//  while they interact with a website

// When a user logs in, we need to remember their login status as they visit different pages. But HTTP (the system that runs websites) does not remember previous requests.

// 🔹 Without a session:

// The server forgets the user as soon as the page reloads.
// Every request is treated as a new request.
// 🔹 With a session:

// The server remembers the user and their data (like login info, cart items, etc.).
// The user does not need to log in again on every request.



// When a user logs in, the session stores their info so they don’t
//  need to log in again on every page.



const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // For form data (e.g., application/x-www-form-urlencoded)
app.use(bodyParser.json());

app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:1000*60*60*24}
}))

// app.post("/log",(req,res)=>{
//     req.session.user= "smriti"
//     res.send("you are logged in ")
// })

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    if (username === "smriti" && password === "1234") {
        req.session.user = username;
        res.send("Login successful!");
    } else {
        res.send("Invalid credentials!");
    }
});


app.get("/profile",(req,res)=>{
    if(req.session.user){
        res.send(`hello ${req.session.user}`)
    }else{
        res.send("you are not logged in")
    }
})
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send("Error logging out.");
        }
        res.send("You have been logged out.");
    });
});


app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000");
    
})