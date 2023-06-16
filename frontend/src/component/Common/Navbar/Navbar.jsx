import React, { useEffect, useState } from 'react'
import './Navbar.css';
import Add from '../Buttons/Add/Add';
import Scrap from '../Buttons/Scrap/Scrap';
import Logout from '../Buttons/Logout/Logout';
import Logo from '../Logo/Logo';
import Alert from '../Alert/Alert';
import { useDispatch } from 'react-redux';
import { logout } from '../../../action/auth';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location= useLocation();
  // console.log(location.pathname);
  const dispatch= useDispatch();
  const auth= JSON.parse(localStorage.getItem("auth")) || null;
  const [text, setText]= useState("Add Item");
  const [nav, setNav]= useState("");
  useEffect(()=>{
    if(location.pathname==='/create'){
      setNav("/product")
      setText("View All Product");
  }else{
    setNav("/create");
    setText("Add Item");
  }
  },[location.pathname])
  function click_logout(){
    dispatch(logout());
  }
  return (
    <>
    <Alert/>
    <nav className='navbar-container'>
        <div className="left-box child">
          <Logo/>
        </div>
        {/* <div className="middle-box child">Middle</div> */}
        {auth!==null && (<>
          <div className="right-box child">
            <Logout  text={text} nav={nav} click_logout={null} />
            <Logout text={"Logout"} nav={'/'} click_logout={click_logout}/>
            <div className="profile">
            <p > {auth.email[0].toUpperCase()} </p>
            </div>
        </div>
        </>)}
    </nav>
    </>
  )
}
