import React, { useEffect, useState } from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Row from '../RowCard/Row'
import './Main.css';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_all_data } from '../../../action/product';
import Loader from '../../Common/Loader/Loader';

export default function Main() {
  const {isLoading}= useSelector((state)=> state.loader);
  const dispatch= useDispatch();
  useEffect(()=>{
      dispatch(fetch_all_data());
  },[])
  return (
    <>
    {isLoading? (<>
      <Loader/>
    </>):(<>
      <div className="product-main-container">
        <Filter/>
        <div className="child display-card-container">
            <Row/>
        </div>
    </div>
    </>)}
    {/* <Navbar/> */}
    </>
  )
}
