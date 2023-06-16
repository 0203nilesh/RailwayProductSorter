import React, { useEffect, useState } from 'react'
import Login from '../Login/Login'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {start_loading, end_loading} from '../../action/loader';

export default function Home() {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const auth= JSON.parse(localStorage.getItem("auth")) || null;
  console.log(auth);
  if(auth!==null){
    dispatch(start_loading());
    setTimeout(()=>{
      navigate("/product");
      dispatch(end_loading());
    },500)
  }
  return (
    <>
    {auth===null && (<>
    <Login/>
    </>)}
    </>
  )
}
