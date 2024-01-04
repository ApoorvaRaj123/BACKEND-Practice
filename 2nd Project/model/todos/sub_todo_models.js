import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({},{timestamps:true});


export const Subtodo = mongoose.model("Subtodo", subTodoSchema);