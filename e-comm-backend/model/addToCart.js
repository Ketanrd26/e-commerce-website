import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
  cartItems: [
    {
      productItem: {
        id: { type: Number },
        name: String,
        title: String,
        price: Number,
        category: String,
        image: String,
      },
    },
  ],

  user:{
    type:mongoose.Types.ObjectId,
    ref:"user",
    required:true
  }
});

export const cart = mongoose.model("CartList", cartModel);
