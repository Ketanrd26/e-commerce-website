import express from "express";
import { authToken } from "../token/token.js";
import { cartList } from "../controller/addtoCartController.js";

export const cartRoute = express.Router();

cartRoute.post("/cartList", authToken, cartList )