import express from "express";
import mongoose from "mongoose";

const app = express();

const port = 3000;


const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    email: {
        type : String,
        unique : true,
        required : true
    },
    password: {
       type : String,
       required : [true, "password is required"]
    }
},
{timestamps: true}
)



app.get('/',(req, res) => {
    res.send('Welcome');
});


app.listen(port, function(){
    console.log(`listening on port ${port}`);
});