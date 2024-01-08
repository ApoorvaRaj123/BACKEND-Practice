import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        usernames: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        email:{
            type:String,
            required:true,
            unique: true,
        },
        password:{
            type:String,
            unique: true,
            required:true
        }
    },
    {timeseries:true}
)

export const User = mongoose.model('User', userSchema)