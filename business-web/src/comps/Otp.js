import React, { useContext, useState } from "react";
import Pop from "../comps/Pop";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Otp = ({ email, name }) => {
  const [otp, setOtp] = useState("");
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const cardval = {
    header: [
      {
        title: "SignUp",
        type: "submit",
      },
    ],
  };

  const otpSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (!otp) {
      setError("OTP is required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/verifyotp", {
        otp,
        email,
      });
      console.log(response, "success");

      if (response.data.status === "success") {
        navigate("/");
        setUser({ name: name });
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Failed to verify OTP. Please try again."
      );
    } finally {
    }
  };

  console.log(email, "email");

  return (
    <>
      <Pop cardvalue={cardval} onSubmit={otpSignUp}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Pop>
    </>
  );
};

export default Otp;
