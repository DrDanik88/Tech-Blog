//Path import
const path = require("path");
//store environment variables in .env without exposing them in the code
require('dotenv').config();

const express = require("express");
const app = express();
const session = require('express-session');
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8000;


//create a new instance of handlebars with default parameters
const hbs = exphbs.create({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    partialsDir: __dirname + '/views/partials/'
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.listen(PORT, () => {
    console.log("Server is started on port " + PORT);
});
app.use(express.static('public'));
app.get("/", (req, res) =>{
    res.render("main",{layout:"index"});
});


/*
app.get("/", (req, res) =>{
    res.render("main",{layout:"index"});
});
*/