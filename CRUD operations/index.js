const express = require("express");
const app = express();

const userModel = require("./usermodel.js");

app.get("/", function (req, res) {
  res.send("Started");
});

app.get("/creat", async (req, res) => {
  let createduser = await userModel.create({
    name: "haha",
    username: "jojo",
    email: "hoho@gmail.com",
  });
  res.send(createduser);
});

app.get("/updat", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { name: "haha" },
    { username: "hehe" },
    { new: true }
  );
  res.send(updateduser);
});

app.get("/read", async (req, res) => {
   let users = await userModel.find()
   res.send(users);
})


app.listen(3000);
