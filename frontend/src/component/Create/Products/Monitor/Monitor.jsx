import React from 'react'

export default function Monitor({data, changeHandler}) {
  return (
    <>
        <div>
            <label htmlFor="company">Company:- </label>
            <input autoComplete="off" onChange={changeHandler} value={data?.company} type="text" name="company" id="company" required/>
        </div>
        <div>
            <label htmlFor="model">Model:- </label>
            <input  autoComplete="off" onChange={changeHandler} value={data?.model} type="text" name="model" id="model" required/>
        </div>
        <div>
            <label htmlFor="size">Size:- </label>
            <input autoComplete="off"  onChange={changeHandler} value={data?.size} type="number" min={12} max={19} name="size" id="size" required/>
        </div>
    </>
  )
}
