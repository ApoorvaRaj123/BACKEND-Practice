const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
    res.send("Home page");
})



app.listen(3000);