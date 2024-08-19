import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiFillSun } from "react-icons/ai";
import { IoIosMoon } from "react-icons/io";
import "../stytles/header.scss";
import Login from "./Login";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/userContext";
const Header = (props) => {
  const {user} = useContext(UserContext)
  const [mobLinks, setMobLinks] = useState(false);

  const [openLoginPop, setLOginPop] = useState(false)
  const navigate = useNavigate();

const goToSignUpPage = ()=>{
  navigate("/SignUp");
  setLOginPop(false)
  
}

const openLOginPop = ()=>{
  setLOginPop(true)
}
const closeLOginPop = ()=>{
  setLOginPop(false)
}
  return (
    <>
      <div className="header-parent parent">
    { openLoginPop &&  <Login goToSignUpPage={goToSignUpPage} close={closeLOginPop} />}
        <div className="header-cont cont">
        
        <div className="desk-nav">
        <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="navlinks">
                <Link to="/">Shop</Link>
                <Link to="/">On sale</Link>
                <Link to="/">new arrivals</Link>
                <Link to="/">brands</Link>
              </div>
          <div className="search-input">
            <input type="search" placeholder="Search" />
          </div>

   
            <div className="end-nav">
            <div className="dark-light" onClick={props.toggleTheme}>
              {props.darkMode ? <AiFillSun /> : <IoIosMoon />}


            
            </div>
            <span>
              <IoCartOutline />
            </span>
            <span className="user">
              <BsPersonCircle onClick={openLOginPop} />
              <span > {user ? user.name : ""} </span>
            </span>
            </div>
            
        </div>
        <div className="mobile-nav">
            <div className="mob-nav-left">
            <div className="three-line-icon" onClick={()=>setMobLinks(!mobLinks)}>
              <IoReorderThreeOutline />
            </div>
          
            <div className="logo">
              <h2>Logo</h2>
            </div>
            </div>
          <div className="card-admin">
          <div className="small-search">
              <span>
                <IoSearchOutline />
              </span>
            </div>
            <div className="dark-light" onClick={props.toggleTheme}>
              {props.darkMode ? <AiFillSun /> : <IoIosMoon />}
          </div>
         <div>
         <span>
                <IoCartOutline />
              </span>
              <span className="user">
                <BsPersonCircle onClick={openLOginPop} />
                <span > {user ? user.name : ""} </span>
              </span>
         </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
