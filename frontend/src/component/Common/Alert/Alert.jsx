import React from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {remove_alert} from '../../../action/alert';

export default function Alert() {
  const dispatch= useDispatch();
    const alert= useSelector((state)=>state.alert);
    // const  alert= {isAlert: true,  alertMessage: {message: "How are you my princess", type: "success"}}
    const timer= setTimeout(()=>{
      dispatch(remove_alert())
    },2000)
    if(!alert.isAlert){
      clearTimeout(timer);
    }
  return (
    <>
    <div 
    style={{backgroundColor: alert?.alertMessage?.type==='success' ?"rgb(109, 182, 255)":"rgb(255, 61, 26)" , display: alert.isAlert?"flex":"none"} }
    className="alert" id='messageText'>
        <p>{alert?.alertMessage?.message}</p>
        <i onClick={ async()=>{
          clearTimeout(timer);
        dispatch(remove_alert());
        }} className="fa-solid fa-xmark cancel"></i>
    </div>
    </>
  )
}
