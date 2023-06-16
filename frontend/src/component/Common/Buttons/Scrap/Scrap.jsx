import React from 'react'
import './Scrap.css';
export default function Scrap({ setScrap}) {
  return (
    <>
    <div className="btn-container">
    <label className="switch btn-color-mode-switch">
        <label htmlFor="color_mode">Scrap</label>
        <input onClick={(e)=>{
          setScrap(e.target.checked);
        }} value="1" id="color_mode" name="color_mode" type="checkbox"/>
        <label className="btn-color-mode-switch-inner" data-off="No" data-on="Yes" htmlFor="color_mode"></label>
    </label>
</div>
    </>
  )
}
