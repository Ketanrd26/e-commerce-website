import React from 'react'
import Pop from './Pop'
import "../stytles/Login.scss"



const Login = ({close, goToSignUpPage}) => {




    const clickFunction = {
header:[
    {
        title:"Log In",
        function : "submit"
    },
    {
        title:"Sign Up",
        function : goToSignUpPage
    },
]
    }
   
  return (
    <>
      <Pop title="Login Page" cardvalue={clickFunction} close={close} >
        <div className="form-row">
     <div className="username">
     <input type="text" className=''/>
        <label htmlFor=""> Username </label>
     </div>
        <div className="password">
        <input type="text" className=''/>
        <label htmlFor=""> Password </label>
        </div>
        </div>
      </Pop>
    </>
  )
}

export default Login
