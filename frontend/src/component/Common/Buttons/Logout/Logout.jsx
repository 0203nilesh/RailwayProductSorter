import React from 'react'
import './Logout.css';
import { useNavigate } from 'react-router-dom';

export default function Logout({text, nav, click_logout}) {
    const navigate= useNavigate();
  return (
    <>
        <button className="button" onClick={()=>{
          if(click_logout!==null){
            click_logout();
          }
          navigate(nav); 
    }} > {text}
        </button>
    </>
  )
}
