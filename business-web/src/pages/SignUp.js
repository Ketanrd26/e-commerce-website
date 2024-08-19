import React, { useContext, useState } from "react";
import "../stytles/signup.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../context/userContext"
import Otp from "../comps/Otp";
const SignUp = () => {
  const [otpPannel , setOtpPannel] = useState(false)
  // const{setUser} = useContext(UserContext)
  //   const navigate = useNavigate()
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const signUp = async (e)=>{
    e.preventDefault();
  try {
    const response =  await axios.post("http://localhost:4000/user/signUp",{
    ...signUpData
  });
  console.log(response)
  if(response.data.status === "success"){
    setOtpPannel(true)
    
  }else{
    alert("you are already registerd")
  }
  } catch (error) {
    
  }
  }

  return (
    <>
      <div className="signup parent">
  {otpPannel && <Otp  email={signUpData.email} name={signUpData.name} />}
        <div className="signup-cont cont">
          <form action="" onSubmit={signUp}>
          <div className="signup-page">
            <div className="top">
              <h2> Sign Up</h2>
              <p>Welcome to Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="middle">
              <div className="name">
                <input
                  type="text"
                  value={signUpData.name}
                  placeholder=" "
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, name: e.target.value })
                  }
                />
                <label htmlFor=""> User Name </label>
              </div>
              <div className="name">
                <input type="email" value={signUpData.email}
                  placeholder=" "
                   onChange={(e) =>
                    setSignUpData({ ...signUpData, email: e.target.value })
                  }
                />
                <label htmlFor=""> Email </label>
              </div>
              <div className="name">
                <input type="text" value={signUpData.password}
                  placeholder=" "
                   onChange={(e) =>
                    setSignUpData({ ...signUpData, password: e.target.value })
                  }
                />
                <label htmlFor=""> Password </label>
              </div>
            </div>
            <div className="bottom">
              <button type="submit">Sign Up</button>
            </div>
          </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
