import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;
export const authToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token) {
      const tokenverify = token.split(" ")[1];
      const user = jwt.verify(tokenverify, secretKey);

      req.userId = user.id;
    } else {
      res.status(400).json({ status: "error" });
    }
    next()
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
