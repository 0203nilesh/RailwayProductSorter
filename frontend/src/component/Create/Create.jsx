import React, { useState } from 'react';
import './Create.css';
import Navbar from '../Common/Navbar/Navbar';
import Text from '../Common/Inputs/Text/Text';
import CreateText from '../Common/Buttons/CreateText/CreateText';
import Monitor from './Products/Monitor/Monitor';
import Printer from './Products/Printer/Printer';
import Scanner from './Products/Scanner/Scanner';
import Others from './Products/Others/Others';
import { useDispatch, useSelector } from 'react-redux';
import { add_product_data } from '../../action/product';
import Loader from '../Common/Loader/Loader';

export default function Create() {
  const dispatch= useDispatch();
  const {isLoading}= useSelector((state)=> state.loader);
  const [data, setData]= useState({category: "monitor",  serialNo:"", details: "", warranty: "", installDate: ""});
  function changeHandler(e){
    setData((prevData)=>{
      return {...prevData, [e.target.name]: e.target.value};
    })
  }
  function specificProperty(){
    switch(data.category){
      case 'monitor':
        return (<><Monitor data={data} changeHandler={changeHandler} /></>);
      case 'printer':
        return (<> <Printer data={data} changeHandler={changeHandler}/> </>);
      case 'scanner':
        return (<> <Scanner data={data} changeHandler={changeHandler} /> </>)
      case 'other':
        return (<> <Others data={data} changeHandler={changeHandler} /> </>)
      default: 
        return (<> <Monitor  data={data} changeHandler={changeHandler} /> </>)
    } 
  }
  function addProduct(e){
    e.preventDefault();
    dispatch(add_product_data(data));
    console.log(data);
    setData({category: "monitor", serialNo:"", details: "", warranty: "", installDate: ""})
  }
  return (
    <>
    {isLoading? (<>
      <Loader/>
    </>):(<>
      <form onSubmit={addProduct} className="create-container child">
      <div className="heading create-child">
        <p>Add Product</p>
      </div>
      <div className="category create-child">
        <label htmlFor="category">Product Type:- </label>
        <select onChange={changeHandler} value={data.category} name="category" id="category" required>
          <option value="monitor">Monitor</option>
          <option value="scanner">Scanner</option>
          <option value="printer">Printer</option>
          <option value="other">Other Components of PC</option>
        </select>
      </div>
      <div className="specific-property create-child">
        {specificProperty() }
        {/* <Monitor  /> */}
        {/* <Printer/> */}
          {/* <Others/> */}
      </div>
      <div className="common-proptery create-child">
          <div>
            <label htmlFor="serialNo">Serial No.</label>
            <input onChange={changeHandler} value={data.serialNo} type="text" name="serialNo" id="serialNo" autoComplete="off" required/>
          </div>
          <div>
            <label htmlFor="details">Details:- </label>
            <textarea  onChange={changeHandler} value={data.details} name="details" id="details" cols="30" rows="5" autoComplete="off" required></textarea>
          </div>
          <div>
            <label htmlFor="warranty">Warranty:- </label>
            <input  onChange={changeHandler} value={data.warranty} min={0} max={5} type="number" name="warranty" autoComplete="off" id="warranty" required/>
          </div>
          <div>
            <label htmlFor="installDate">Install Date:- </label>
            <input onChange={changeHandler} value={data.installDate}  type="date" min='2000-01-01' autoComplete="off" max={`${new Date().getFullYear()}-12-31`} name="installDate" id="installDate" required/>
          </div>
          {/* <div className="button"> */}
            <CreateText type={"submit"} />
          {/* </div> */}
      </div>
    </form>
    </>)}
    </>
  )
}
