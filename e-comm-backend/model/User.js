import mongoose, { model } from "mongoose";

const useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      otp: {
        type:String,
        required: false,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
});
const userModel = mongoose.model("userData", useSchema);

export default userModel