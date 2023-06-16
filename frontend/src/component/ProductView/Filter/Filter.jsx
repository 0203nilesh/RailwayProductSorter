import React, { useEffect, useState } from 'react'
import './Filter.css';
import FilterButton from '../../Common/Buttons/FilterButton/FilterButton';
import Scrap from '../../Common/Buttons/Scrap/Scrap';
import { useDispatch } from 'react-redux';
import { fetch_filter_data } from '../../../action/product';

export default function Filter() {
  const dispatch = useDispatch();
  // const [scrap, setScrap]= useState(false);
  const [filterData, setFilterData]= useState({category:"", serialNo:"", model: "", company: "", isScrap: false})
  function changeHandler(e){
    setFilterData((prevData)=>{
      return{...prevData, [e.target.name]: e.target.value};
    })
  }
  function clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === "") {
        delete obj[propName];
      }
    }
    return obj;
  }
  async function applyFilter(e){ 
    e.preventDefault();
    const data= await clean(filterData);
    console.log(data);
    dispatch(fetch_filter_data(data));
    setFilterData({category:"", serialNo:"", model: "", company: "", isScrap: false});
  }
  
  return (
    <>
    <form onSubmit={applyFilter} className="child filter-container">
      <div className="category filter-child">
          <label htmlFor="category">Product:- </label>
          <select onChange={changeHandler} value={filterData.category} name="category" id="category">
            <option value="">Select</option>
            <option value="monitor">Monitor</option>
            <option value="printer">Printer</option>
            <option value="scanner">Scanner</option>
            <option value="other">Other Parts of PC </option>
          </select>
      </div>
      <div className="scrap filter-child">

            <div className="btn-container">
          <label className="switch btn-color-mode-switch">
              <label htmlFor="color_mode">Scrap</label>
              <input onClick={(e)=>{
                setFilterData((prevData)=>{
                  return {...prevData, isScrap: e.target.checked};
                })
              }} value="1" id="color_mode" name="color_mode" type="checkbox"/>
              <label className="btn-color-mode-switch-inner" data-off="No" data-on="Yes" htmlFor="color_mode"></label>
          </label>
            </div>
        {/* <Scrap  setScrap={setScrap} /> */}
      </div>
      <div className="other-property filter-child">
        <div>
          <label htmlFor="serialNo">Serial No:-</label>
          <input onChange={changeHandler} value={filterData.serialNo} type="text" name="serialNo" id="serialNo" />
        </div>
        <div>
          <label htmlFor="model">Model:- </label>
          <input onChange={changeHandler} value={filterData.model} type="text" name="model" id="model" />
        </div>
        <div>
          <label htmlFor="company">Company:- </label>
          <input onChange={changeHandler} value={filterData.company} type="text" name="company" id="company" />
        </div>
      </div>
      <div className="buttons filter-child">
        <FilterButton/>
      </div>
      
    </form>
    </>
  )
}
