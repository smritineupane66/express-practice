

// Pug is a templating engine for Node.js and Express.js
// . It helps generate HTML dynamically using a simpler
//  and more readable syntax.


// Why Use Pug?

// Simplifies HTML – No need to write opening & closing 
// tags (<div></div>).
// Faster development – Uses indentation instead of
//  closing tags.



// const express = require('express')

// const app = express()

// app.set('view engine','pug')
  //set pug as template engine
  // app.set('views', __dirname + '/views');


// In Express.js, res.render() is used to generate and
//  send an HTML response by rendering a template file 
//  (like Pug, EJS, or Handlebars) with dynamic data.
// app.get("/",(req,res)=>{
//     res.render("index",{title:"my smriti" , message: "hello girl"})
// })

// app.listen(3000,()=>{
//     console.log('server is listening at local host 3000');
    
// })


// attributes


var express = require('express')
var app = express()

app.set('view engine', 'pug')

  app.set('views', __dirname + '/views');

  app.get('/',(req,res)=>{
    res.render('hello',{
      name:"smriti",
      adress:"butwal"
    })
  })

  app.listen(5000, ()=>{ console.log('server is listening at local host 5000'); });


