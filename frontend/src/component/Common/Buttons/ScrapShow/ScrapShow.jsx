import React from 'react'
import './ScrapShow.css';
import { useDispatch } from 'react-redux';
import { scrap_product } from '../../../../action/product';
import { display_alert } from '../../../../action/alert';
import { useNavigate } from 'react-router-dom';

export default function ScrapShow( {text, id} ) {
  const navigate= useNavigate(); 
  const dispatch= useDispatch(); 
  return (
    <>
    <button className="scrap-button" style={{backgroundColor: text==='Scrap'?("red"): ("#737081")}} >
    <span className="button-content"  onClick={()=>{
      if(text==='Scrap It'){
        dispatch(scrap_product(id));
      }else{
        dispatch(display_alert({message: "Already Scrapped"}))
      }
    }} >{text} </span>
    </button>
    </>
  )
}
