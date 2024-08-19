import UserData from "../model/User.js";

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;



    if (!email || !otp) {
      console.log("Missing email or OTP");
      return res.status(400).json({
        status: "error",
        message: "Email and OTP are required.",
      });
    }

    const user = await UserData.findOne({ email, otp });
    console.log("User found:", user);

    if (!user) {
      console.log("User not found with email:", email);
      return res.status(400).json({
        status: "error",
        message: "User not found.",
      });
    }

    console.log("Provided OTP:", otp);
    console.log("Stored OTP:", user.otp);

    if (user.otp !== otp) {
      console.log("Invalid OTP. Provided:", otp, "Expected:", user.otp);
      return res.status(400).json({
        status: "error",
        message: "Invalid OTP.",
      });
    }

  
    user.otp = undefined; // Use undefined instead of null
    await user.save();
   
    res.status(200).json({
      status: "success",
      message: "OTP verified successfully. You are now registered.",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
