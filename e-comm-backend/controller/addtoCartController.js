import { cart } from "../model/addToCart.js";

export const cartList = async (req,res)=>{
    try {
        const {id, name,title,price,category} = req.body;

    if(!id || !name || !title || !price || !category){
        res.status(400).json({
            messgae:"data is incomplete"
        })
    }

    const cartData = new cart({
        id,
        name,
        title,
        price,
        category
    });

    await cartData.save();

    res.status(200).json({
        data:cartData,
        message:"cart save successfully"
    })
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}