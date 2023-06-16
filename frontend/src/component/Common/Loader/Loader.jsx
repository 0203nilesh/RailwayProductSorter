import React from 'react'
import './Loader.css';

export default function Loader() {
  return (
    <>
      <div className="loader-main-container">
      <div className="loader-container">
  <div className="content">
    <div className="track"></div>
    <div className="train">
      <div className="front"></div>
      <div className="wheels">
        <div className="smallOne"></div>
        <div className="smallTwo"></div>
        <div className="smallThree"></div>
        <div className="smallFour"></div>
        <div className="smallFive"></div>
        <div className="smallSix"></div>
        <div className="big"></div>
      </div>
      <div className="cord"></div>
      <div className="coach"></div>
      <div className="coachTwo"></div>
      <div className="windows"></div>
      
      <div id="up" className="steam"></div>
    <div id="up" className="steam2"></div>
    <div id="up" className="steam3"></div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}
