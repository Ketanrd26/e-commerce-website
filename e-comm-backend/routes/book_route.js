import express from "express";

import{bookItem} from "../controller/book_controller.js";

const route = express.Router();

route.get("/", bookItem);

export default route;