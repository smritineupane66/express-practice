// Static files (like HTML, CSS, JavaScript, images,
//      and fonts) are essential for building web 
//      applications. Instead of writing everything
//       dynamically in the backend, we serve these 
//       files directly to improve performance and 
//       efficiency.


// Without serving static files, your frontend (UI) won’t work properly.
// Example:

// CSS styles for the page
// JavaScript for interactivity
// Images and fonts for design
// Static files include CSS, JavaScript, images, and fonts.

// Link CSS in index.html
// html
// Copy
// Edit
// <link rel="stylesheet" href="/css/style.css">
// Now, when you visit http://localhost:3000/, 
// index.html loads and automatically applies 
// style.css from /public/css/style.css.

const express = require("express")
const path = require("path")

const app = express();

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, "public")));
// Serve all files inside the public/ folder as static files.
// ✅ If a request comes for /css/style.css, it will look for public/css/style.css.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});