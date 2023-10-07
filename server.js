//Path import
const path = require("path");
//store environment variables in .env without exposing them in the code
require('dotenv').config();

const express = require("express");
const app = express();
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is started on port " + PORT);
});

app.get("/", (req, res) =>{
    res.send("hello world");
});