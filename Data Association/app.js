const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
    res.send("Home page");
})

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "Raman",
        age: 23,
        email: "user@example.com",
    });

    res.send(user);
})


app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata : "This is Post data",
        user : "66f03b2cae4fabc1e8e7a7db",
    });

    let user = await userModel.findOne({_id: "66f03b2cae4fabc1e8e7a7db"});

    user.post.push(post._id);
    await user.save();
    res.send({post, user});
})


app.listen(3000);
