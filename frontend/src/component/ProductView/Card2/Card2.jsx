import React, { useState } from 'react'
import './Card2.css';
import ScrapShow from '../../Common/Buttons/ScrapShow/ScrapShow';
import Monitor from './Products/Monitor';
import Printer from './Products/Printer';
import Scanner from './Products/Scanner';
import Other from './Products/Other';
import { useDispatch } from 'react-redux';
import { scrap_product } from '../../../action/product';

export default function Card2({data}) {
  const dispatch= useDispatch();
  console.log(data);
  let text;
  if(data?.isScrap===true){
    text='Scrap';
  }else{
    text= 'Scrap It';
  }
  let device;
  switch(data?.category){
    case 'monitor':
      device= 'fa-sharp fa-solid fa-desktop';
      break;
    case 'printer':
      device= 'fa-sharp fa-solid fa-print';
      break;
    case 'scanner':
      console.log("hi");
      device= 'fa-solid fa-wrench';
      break;
    default:
      device= 'fa-sharp fa-solid fa-laptop';
  }  
  function otherProperty(){
    switch(data?.category){
      case 'monitor':
        return (<> <Monitor data={data} /> </>);
      case 'printer': 
        return (<> <Printer data={data} /> </>);
      case 'scanner':
        return (<> <Scanner data={data} /> </>)
      default:
        return (<> <Other data={data}/> </>)
    }
  }
  
  return (
    <>
    <div class="card">
        <div class="card2">
          <div className="category card2-child">
          <i className={device}></i>
            <p className='company' > {data?.company || data?.monitor_make }</p>
            <ScrapShow text={text} id={data?._id} />
          </div>
          <div className="specific-property card2-child">
              {otherProperty()}
          </div>
          <div className="common-property card2-child">
            <div className="details">
            <p> {data?.details} </p>
            </div>
            <div className="others">
            <p><span>Searial No. :- </span> <span className="value"> {data?.serialNo} </span> </p>
            <p><span>Warrany:- </span> <span className="value">{data?.warranty} Year</span> </p>
            <p><span>Installation On:- </span><span className="value"> {data?.installDate} </span> </p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
