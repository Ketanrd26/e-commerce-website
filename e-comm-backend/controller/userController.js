import UserData from "../model/User.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import otpGenerator from "../controller/otpDeclared.js";
import jwt from "jsonwebtoken";
import { verifyOtp } from "./otpController.js";

dotenv.config();

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Name, email, and password are required.",
      });
    }

    const existingUser = await UserData.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const otpPin = otpGenerator();
    
    const newUser = new UserData({
      name,
      email,
      password,
      otp: otpPin,
    });

    await newUser.save();

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      secretKey
    );

    newUser.token = token;
    await newUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"e-commerce" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to eCommerce website",
      text: `Hi, thank you for signing up for the eCommerce app. Your OTP is ${otpPin}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          status: "error",
          message: "Failed to send welcome email",
          error: error.message,
        });
      }
    });

    res.status(200).json({
      status: "success",
      message: "User created successfully. OTP sent to your email.",
      token: token,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error", error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
  const existUser = await UserData.findOne({email : email, password:password});
 

  if (!existUser) {
    res.status(400).json({
      message: "invaild credintials",
    });
  }

  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign({email: existUser.email, id:existUser._id},secretKey);
  res.status(200).json({
    message:"login successfully",
    token : token
  })
  

  } catch (error) {
    res.status(500).json({message:error})
  }
   

};
