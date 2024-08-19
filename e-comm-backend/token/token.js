import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const secretKey = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
