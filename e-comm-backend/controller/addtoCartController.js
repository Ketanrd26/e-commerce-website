import { cart } from "../model/addToCart.js";
import userModel from "../model/User.js";

export const cartList = async (req, res) => {
    try {
        const { id, name, title, price, category } = req.body;
        const userId = req.userId; 

        
        if (!id || !name || !title || !price || !category) {
            return res.status(400).json({
                message: "Data is incomplete",
            });
        }

  
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

     
        const cartItem = {
            productItem: {
                id,
                name,
                title,
                price,
                category,
            },
        };

      
       
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal server error",
        });
    }
};
