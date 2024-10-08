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

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, (req, res) => {
  let user = await userModel.findOne({email: req.body.email});
  res.render("profile", {user});
});

app.post("/register", async (req,res)=>{
    let {name, username, email, password, age} = req.body;
    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("Email already exists");

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, (err, hash)=>{
            let user = userModel.create({
                name,
                username,
                email,
                password : hash,
                age,
            })

            let token = jwt.sign({email:email, userid: user._id})
            res.cookie("token",token);
            res.send("registered");

        });
        res.redirect("/");
    })
})

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      res.status(200).send("Logged in");
      let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.render("login");
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token == "") res.send("Must be Logged in");
  else {
    let data = jwt.verify(req.cookies.token, "shhh");
    req.user = data;
  }
  next();
}

app.listen(3000);
