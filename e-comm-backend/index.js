import http from "http";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./model/model.js"; 
import cors from "cors"
import bookRoute from "./routes/book_route.js"
import productData from './product.json' assert { type: 'json' };
import userRoute from "./routes/userRoute.js"
import otpRoute from "./routes/otpRoute.js"
import { cartRoute } from "./routes/cartRoute.js";


const app = express();

dotenv.config();

try {
    mongoose.connect("mongodb+srv://ketanrdgraphics26:I2dxiWNuq2l0gWN5@test.bsynfqb.mongodb.net/?retryWrites=true&w=majority&appName=test");
    console.log("mongodb connected");
} catch (error) {
    console.log(error, "mongodb not connected");
}
app.use(cors())
app.use(express.json());
app.use("/book", bookRoute);
app.use("/user",userRoute )
app.use("/verifyotp", otpRoute); 

app.use("/addToCart", cartRoute)
const port = process.env.PORT || 4001;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/products", async (req, res) => {
    try {
        const productList = await User.insertMany(productData.products);
        res.status(200).json({ message: "data send successfully", productList });
    } catch (error) {
        res.status(400).json({ message: "error something", error });
    }
});

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
