import React from 'react'
import './Add.css';
import { useNavigate } from 'react-router-dom';

export default function Add({text, nav}) {
  const navigate= useNavigate();
  return (
    <>
    <button className="Btn" onClick={()=>{
      navigate(nav);      
    }}>
        {text}
    </button>
    </>
  )
}
