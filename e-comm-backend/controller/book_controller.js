
import book from "../model/model.js"

export const bookItem = async (req,res)=>{
try {
    const Book = await book.find();
    res.status(200).json(Book)
    console.log("success")
} catch (error) {
    console.log("error", error)
    res.status(500).json(error)
}
}