const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


app.get("/", (req, res) => {
    // res.cookie("name", "Apoorva");
    // res.send("done");

    // bcrypt.genSalt(10,(err, salt) => {
    //     bcrypt.hash("pololololo",salt, (err, salt) => {

    //     });
// });

let token = jwt.sign({email:"asdasa@gmail.com"}, "secret");
res.cookie("token", token);
res.send("done");
});

app.get("/read", (req, res) => {
    // console.log(req.cookies);
    // res.send("read page");

    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
});

app.listen(3000);
