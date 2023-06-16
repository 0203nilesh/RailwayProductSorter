import React from 'react'
import './Row.css';
import Card2 from '../Card2/Card2';
import { useSelector } from 'react-redux';
// import Card from '../Card/Card';

export default function Row() {
  const {productData}= useSelector((state)=> state.product);
  console.log(productData);
  return (
    <div className="row-container">
        {/* <Card/>
        <Card/>
        <Card/> */}
        {productData.length!==0 ?(<>
          {productData.map((product)=>{
            return (<>
            <Card2 key={product._id} data={product} />
            </>)
          })}
        </>):(<>
          <p>No Data</p>
        </>)}
    </div>
  )
}
