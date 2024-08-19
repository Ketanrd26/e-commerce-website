import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    id:{type: Number},
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
});

const book = mongoose.model("products", dataSchema);

export default  book 
