const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('./models/user');
const postModel = require('./models/post');


app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req,res)=>{
    res.render('index');
})

app.post("/register", async (req,res)=>{
    let {name, username, email, password, age} = req.body;
    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("Email already exists");

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, (err, hash)=>{
            let createdUser = userModel.create({
                name,
                username,
                email,
                password : hash,
                age,
            })

            let token = jwt.sign({email:email, userid: createdUser._id})
            res.cookie("token",token);
            res.send("registered");

        });
        res.redirect("/");
    })
})


app.listen(3000);
