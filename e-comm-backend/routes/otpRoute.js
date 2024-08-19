import express from "express";
import { verifyOtp } from "../controller/otpController.js";

const router = express.Router();

router.post("/", verifyOtp); 
export default router;
